import React, { useEffect, useState, Profiler } from "react";
import * as Styled from "./styled";
import { ActionBtn, BlueTextBtn } from "../../shared-components/Buttons";
// import StyledCheckbox from "../../shared-components/StyledCheckbox";
import ShortInfo from "../../shared-components/ShortInfo";
import SearchResult from "../../shared-components/SearchResult";
import Pagination from "../../shared-components/Pagination";
import { TextInput } from "../../shared-components/FilterInputs";
import { MultiSelect } from "../../shared-components/MultiSelect";
import { RadioBtn } from "../../shared-components/StyledRadioBtn";
import { GENDER, LANGUAGES, SKILLS } from "../../configuration/TemporaryConsts";
import { GQLUrl, SearchQuery } from "../../configuration/BackendConsts";
import ApolloClient from "apollo-boost";
import { useLocation } from "react-router-dom";
import { PopUp } from "../../shared-components";
import PopUpContent from "./PopUpContent";
import PopUpFilter from "./PopUpFilter";

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
};

let delayedSending;

export default (props) => {
  const urlParams = useLocation();
  const [isShownPopUp, setShownPopUp] = useState(false);
  const [isShownFilterPopUp, setShownFilterPopUp] = useState(!urlParams.search);
  const [initial, setInitial] = useState(true);
  const [formData, setFormData] = useState({ ...initialState });
  const [requestData, setRequestData] = useState([]);
  const [pagedData, setPagedData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (urlParams.search) urlParsing();
  }, []);

  useEffect(() => {
    clearTimeout(delayedSending);
    delayedSending = setTimeout(() => {
      if (initial) setInitial(false);
      else {
        setPage(1);
        urlCreate();
      }
      sendRequest();
    }, 500);
  }, [formData]);

  useEffect(() => {
    if (!initial) urlCreate();
  }, [page]);

  useEffect(() => {
    setPagedData(renderResults());
  }, [page, requestData]);

  const urlParsing = () => {
    const decodeURL = decodeURIComponent(urlParams.search);
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
            .map((x) => keys.find((f) => f.value === x))
            .filter((x) => x !== undefined);

          newState = {
            ...newState,
            [item[0]]: newItem,
          };
          break;
        case "page":
          setPage(Number(item[1]));
          break;
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
            const keys = formData[item].map((x) => x.value);
            url += `${item}=${keys.join(",")}&`;
          }
          break;
        default:
          const value = String(formData[item]).trim();
          if (value.length) url += `${item}=${value}&`;
          break;
      }
    }
    if (page > 1) url += `page=${page}&`;

    const encodeURL = encodeURIComponent(url.slice(0, -1));
    props.history.push(`/employer/search?${encodeURL}`);
  };

  const sendRequest = () => {
    if (!isEmpty()) {
      return;
    }
    const client = new ApolloClient({
      uri: GQLUrl,
    });
    const variables = {
      public_data: {},
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
        query: SearchQuery,
        variables,
      })
      .then((result) => setRequestData(result["data"]["resume"]))
      .catch((error) => console.log(error));
  };

  const renderResults = () => {
    if (requestData.length) {
      const data = requestData.slice(page * limit - limit, page * limit);
      const count = Math.ceil(requestData.length / limit);
      const getAge = (birth_date) => {
        return (
          new Date().getFullYear() -
          new Date(new Date() - new Date(birth_date)).getFullYear()
        );
      };

      return (
        <>
          {data.map(({ public_data, birth_date, sex }) => (
            <SearchResult
              key={Math.random()}
              gender={sex}
              age={getAge(birth_date)}
              skills={public_data["skills"].join(", ")}
              requested={false}
              clickedSend={openPopUp}
            />
          ))}
          <BlueTextBtn text="Send to all" />
          <Pagination page={page} count={count} changePage={setPage} />
        </>
      );
    } else {
      return <Styled.Stub>Is empty</Styled.Stub>;
    }
  };

  const isEmpty = () => {
    for (let item in formData) {
      if (Array.isArray(formData[item])) if (formData[item].length) return true;
      if (String(formData[item]).trim().length) return true;
    }
    return false;
  };

  const multiSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const radioChange = (e) => {
    const { value, name } = e.target;
    if (value !== undefined && name !== undefined) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: formData[name] !== value ? value : "",
      }));
    }
  };

  const clearAll = () => {
    if (urlParams.search) {
      setFormData({ ...initialState });
      setRequestData([]);
      props.history.push("/employer/search");
    }
  };

  const openPopUp = () => setShownPopUp(true);
  const closePopUp = () => setShownPopUp(false);
  const confirmSend = () => {
    setShownPopUp(false);
    alert("Request is successfuly sent");
  };
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
                  name="skills"
                  onChange={multiSelectChange}
                  value={formData.skills}
                />
              </Styled.Input>

              <Styled.Input>
                <p id="label">Gender</p>
                <Styled.Options>
                  <Styled.Option>
                    <RadioBtn
                      data={[GENDER[0]]}
                      checked={formData.sex === "m"}
                      name="sex"
                      onClick={radioChange}
                    />
                    <RadioBtn
                      data={[GENDER[1]]}
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
                <TextInput
                  placeholder="Add Country"
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                />
              </Styled.Input>

              <Styled.Input>
                <p id="label">Languages</p>
                <MultiSelect
                  data={LANGUAGES}
                  placeholder="Add Languages"
                  width="100%"
                  name="languages"
                  onChange={multiSelectChange}
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
          <Styled.Results>{pagedData}</Styled.Results>
        </Styled.SearchBlock>
      </Styled.Container>

      <PopUp isShownPopUp={isShownPopUp}>
        <PopUpContent clickedOK={confirmSend} clickedCancel={closePopUp} />
      </PopUp>

      <PopUpFilter
        isShown={isShownFilterPopUp}
        closeFilter={closeFilterPopUp}
        setData={setFormData}
      />
    </>
  );
};
