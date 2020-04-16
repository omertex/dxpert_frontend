import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { ActionBtn, BlueTextBtn } from "../../shared-components/Buttons";
import ShortInfo from "../../shared-components/ShortInfo";
import SearchResult from "../../shared-components/SearchResult";
import SmallPagination from "../../shared-components/SmallPagination";
import { TextInput } from "../../shared-components/FilterInputs";
import { MultiSelect } from "../../shared-components/MultiSelect";
import { RadioBtn } from "../../shared-components/StyledRadioBtn";
import { LANGUAGES, SKILLS } from "../../configuration/TemporaryConsts";
import { GQLUrl, GQLSearchQuery } from "../../configuration/BackendConsts";
import ApolloClient from "apollo-boost";
import { withRouter } from "react-router-dom";
import { PopUp } from "../../shared-components";
import PopUpContent from "./PopUpContent";
import PopUpFilter from "./PopUpFilter";
import { getCountriesListAction } from "../../store/actions/serviceDataActions";
import { connect } from "react-redux";
import { FilterSelect } from "../../shared-components/FilterSelect";

const limit = 10;
const initialState = {
  skills: [],
  sex: "",
  country: "",
  age_from: "",
  age_to: "",
  languages: [],
  exp_from: "",
  exp_to: "",
  education: "",
  page: 1,
};

let delayedSending;

const SearchFilter = ({ history, countries, getCountriesList }) => {
  const [popUpData, setPopUpData] = useState([]);
  const [isShownFilterPopUp, setShownFilterPopUp] = useState(
    !history.location.search
  );
  const [initial, setInitial] = useState(true);
  const [formData, setFormData] = useState({ ...initialState });
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    if (history.location.search) urlParsing();
    getCountriesList();
  }, []);

  useEffect(() => {
    clearTimeout(delayedSending);
    delayedSending = setTimeout(() => {
      if (initial) setInitial(false);
      else {
        urlCreate();
      }
      sendRequest();
    }, 500);
  }, [formData]);

  const urlParsing = () => {
    const decodeURL = decodeURIComponent(history.location.search);
    const params = decodeURL.slice(1).split("&");
    const couple = params.map((x) => x.split("="));
    let newState = { ...initialState };

    couple.map((item) => {
      switch (item[0]) {
        case "skills":
        case "languages":
          const keys = item[0] === "skills" ? SKILLS : LANGUAGES;
          const newItem = item[1]
            .split(",")
            .map((x) => keys.find((f) => f === x))
            .filter((x) => x !== undefined);

          newState = {
            ...newState,
            [item[0]]: newItem,
          };
          break;
        case "page":
        case "sex":
        case "country":
        case "education":
        case "age_from":
        case "age_to":
        case "exp_from":
        case "exp_to":
          newState = {
            ...newState,
            [item[0]]: item[1],
          };
          break;
      }
    });

    setFormData((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const urlCreate = () => {
    let url = "";
    for (let item in formData) {
      switch (item) {
        case "skills":
        case "languages":
          if (formData[item].length) {
            url += `${item}=${formData[item].join(",")}&`;
          }
          break;
        case "page":
          if (formData[item] > 1) {
            url += `${item}=${formData[item]}&`;
          }
          break;
        default:
          const value = String(formData[item]).trim();
          if (value.length) url += `${item}=${value}&`;
          break;
      }
    }

    const encodeURL = encodeURIComponent(url.slice(0, -1));
    history.push(`/search?${encodeURL}`);
  };

  const sendRequest = () => {
    const client = new ApolloClient({
      uri: GQLUrl,
    });
    const variables = {
      public_data: {},
      limit: limit,
      offset: (formData.page - 1) * limit,
    };

    const getYear = (value) => {
      const birth_date = new Date();
      birth_date.setFullYear(birth_date.getFullYear() - value);
      return birth_date.toISOString();
    };

    for (let item in formData) {
      switch (item) {
        case "skills":
        case "languages":
          if (formData[item].length) {
            variables.public_data[`${item}`] = formData[item].map(
              (x) => x.value
            );
          }
          break;
        case "sex":
        case "country":
          const value = String(formData[item]).trim();
          if (value.length) variables[item] = value;
          break;
        case "age_from":
        case "age_to":
          if (formData[item] > 0) variables[item] = getYear(formData[item]);
          break;
        case "exp_from":
        case "exp_to":
          if (formData[item] > 0) variables[item] = formData[item];
          break;
        case "education":
          const education = String(formData[item]).trim();
          if (education.length) {
            variables.public_data[`${item}`] = [{ facility: education }];
          }
          break;
      }
    }

    client
      .query({
        query: GQLSearchQuery,
        variables,
      })
      .then((response) => {
        if (response && response.data) {
          setRequestData(renderResults(response["data"]["resumes"]));
        }
      })
      .catch((error) => console.log(error));
  };

  const renderResults = (data) => {
    if (data.length) {
      const prevPage = () => {
        setFormData((prevState) => ({
          ...prevState,
          page: formData.page - 1,
        }));
      };
      const nextPage = () => {
        setFormData((prevState) => ({
          ...prevState,
          page: formData.page + 1,
        }));
      };
      const getAge = (birth_date) => {
        return (
          new Date().getFullYear() -
          new Date(new Date() - new Date(birth_date)).getFullYear()
        );
      };

      return (
        <>
          {data.map(({ public_data, birth_date, sex, address }) => (
            <SearchResult
              key={Math.random()}
              gender={sex}
              age={getAge(birth_date)}
              skills={public_data["skills"].join(", ")}
              requested={false}
              clickedSend={() => {
                openPopUp(sex, getAge(birth_date), address);
              }}
            />
          ))}
          {/*<BlueTextBtn text="Send to all" />*/}
          <SmallPagination
            disabledPrev={formData.page === 1}
            disabledNext={data.length < limit}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </>
      );
    } else {
      return <Styled.Stub>Is empty</Styled.Stub>;
    }
  };

  const multiSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      page: 1,
    }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      page: 1,
    }));
  };

  const radioChange = (e) => {
    const { value, name } = e.target;
    if (value !== undefined && name !== undefined) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: formData[name] !== value ? value : "",
        page: 1,
      }));
    }
  };

  const clearAll = () => {
    if (history.location.search) {
      setFormData({ ...initialState });
      setRequestData([]);
      history.push("/search");
    }
  };

  const openPopUp = (sex, age, requested_address) => {
    setPopUpData([
      {
        sex,
        age,
        requested_address,
      },
    ]);
  };
  const closePopUp = () => setPopUpData([]);
  const closeFilterPopUp = () => setShownFilterPopUp(false);

  return (
    <>
      <Styled.Container>
        <ShortInfo />
        <Styled.SearchInfo>
          {/* <Styled.Found>
            We found {SEARCHED_RESULTS.length} users with similar skills
          </Styled.Found>
          <Styled.Option>
            <StyledCheckbox value="exact-match" />
            <p id="after">exact match</p>
          </Styled.Option> */}
        </Styled.SearchInfo>
        <Styled.SearchBlock>
          <Styled.Filters>
            <Styled.Header>
              <h3>Filters</h3>
              <ActionBtn text="Clear all" clicked={clearAll} />
            </Styled.Header>
            <Styled.Form>
              <Styled.Input>
                <p id="label">Skills</p>
                <MultiSelect
                  data={SKILLS}
                  width="100%"
                  onChange={(value) => {
                    multiSelectChange("skills", value);
                  }}
                  value={formData.skills}
                />
              </Styled.Input>

              <Styled.Input>
                <p id="label">Gender</p>
                <Styled.Options>
                  <Styled.Option>
                    <RadioBtn
                      data={[{ label: "Male", value: "m" }]}
                      checked={formData.sex === "m"}
                      name="sex"
                      onClick={radioChange}
                    />
                    <RadioBtn
                      data={[{ label: "Female", value: "f" }]}
                      checked={formData.sex === "f"}
                      name="sex"
                      onClick={radioChange}
                    />
                  </Styled.Option>
                </Styled.Options>
              </Styled.Input>

              <Styled.Input>
                <p id="label">Age</p>
                <Styled.Options>
                  <Styled.Option>
                    <p id="before">From</p>
                    <TextInput
                      width="55px"
                      name="age_from"
                      type="number"
                      onChange={handleChange}
                      value={formData.age_from}
                    />
                  </Styled.Option>
                  <Styled.Option>
                    <p id="before">To</p>
                    <TextInput
                      width="55px"
                      name="age_to"
                      type="number"
                      onChange={handleChange}
                      value={formData.age_to}
                    />
                  </Styled.Option>
                </Styled.Options>
              </Styled.Input>

              <Styled.Input>
                <p id="label">Country</p>
                <FilterSelect
                  name="country"
                  changed={handleChange}
                  value={formData.country}
                  data={countries}
                  placeholder="Add Country"
                />
              </Styled.Input>

              <Styled.Input>
                <p id="label">Languages</p>
                <MultiSelect
                  data={LANGUAGES}
                  placeholder="Add Languages"
                  width="100%"
                  name="languages"
                  onChange={(value) => {
                    multiSelectChange("languages", value);
                  }}
                  value={formData.languages}
                />
              </Styled.Input>

              <Styled.Input>
                <p id="label">Work Experience</p>
                <Styled.Options>
                  <Styled.Option>
                    <p id="before">From</p>
                    <TextInput
                      width="55px"
                      name="exp_from"
                      type="number"
                      onChange={handleChange}
                      value={formData.exp_from}
                    />
                  </Styled.Option>
                  <Styled.Option>
                    <p id="before">To</p>
                    <TextInput
                      width="55px"
                      name="exp_to"
                      type="number"
                      onChange={handleChange}
                      value={formData.exp_to}
                    />
                  </Styled.Option>
                </Styled.Options>
              </Styled.Input>

              <Styled.Input>
                <p id="label">Education</p>
                <TextInput
                  placeholder="Level or Type"
                  name="education"
                  onChange={handleChange}
                  value={formData.education}
                />
              </Styled.Input>
            </Styled.Form>
          </Styled.Filters>
          <Styled.Results>{requestData}</Styled.Results>
        </Styled.SearchBlock>
      </Styled.Container>

      <PopUp isShownPopUp={Boolean(popUpData.length)}>
        <PopUpContent cancel={closePopUp} data={popUpData} />
      </PopUp>

      <PopUpFilter
        isShown={isShownFilterPopUp}
        closeFilter={closeFilterPopUp}
        setData={setFormData}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.serviceData.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountriesList: () => dispatch(getCountriesListAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchFilter));
