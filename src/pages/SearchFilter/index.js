import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { BlueTextBtn } from "../../shared-components/Buttons";
import StyledCheckbox from "../../shared-components/StyledCheckbox";
import { SEARCHED_RESULTS } from "../../configuration/TemporaryConsts";
import ShortInfo from "../../shared-components/ShortInfo";
import SearchResult from "../../shared-components/SearchResult";
import Pagination from "../../shared-components/Pagination";
import { ActionBtn } from "../../shared-components/Buttons";
import { TextInput } from "../../shared-components/FilterInputs";
import { MultiSelect } from "../../shared-components/MultiSelect";
import { RadioBtn } from "../../shared-components/StyledRadioBtn";
import { SKILLS, LANGUAGES, GENDER } from "../../configuration/TemporaryConsts";
import { PopUp } from "../../shared-components";
import PopUpContent from "./PopUpContent";
import PopUpFilter from "./PopUpFilter";
import { useLocation } from "react-router-dom";

const initialState = {
  skills: [],
  sex: "",
  country: "",
  age_from: "",
  age_to: "",
  languages: [],
  exp_from: "",
  exp_to: "",
  education: ""
};

let delayedSending;

export default props => {
  const urlParams = useLocation();
  const [isShownPopUp, setShownPopUp] = useState(false);
  const [isShownFilterPopUp, setShownFilterPopUp] = useState(!urlParams.search);
  const [formData, setFormData] = useState({ ...initialState });

  // http://localhost:3000/employer/search?skills=git+css&country=minsk&education=higher&languages=en+ru&sex=m&age_from=10&age_to=20&exp_from=20&exp_to=60

  useEffect(() => {
    if (urlParams.search) urlParsing();
  }, []);

  useEffect(() => {
    clearTimeout(delayedSending);
    delayedSending = setTimeout(() => {
      if (urlCreate()) console.log(formData);
    }, 500);
  }, [formData]);

  const urlParsing = () => {
    const params = urlParams.search.slice(1).split("&");
    const couple = params.map(x => x.split("="));
    let newState = { ...initialState };

    couple.map(item => {
      switch (item[0]) {
        case "skills":
        case "languages":
          const keys = item[0] === "skills" ? SKILLS : LANGUAGES;
          const newItem = item[1]
            .split("+")
            .map(x => keys.find(f => f.value === x))
            .filter(x => x !== undefined);

          newState = {
            ...newState,
            [item[0]]: newItem
          };
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
            [item[0]]: item[1]
          };
          break;
      }
    });

    setFormData(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  const urlCreate = () => {
    let url = "/employer/search?";
    for (let item in formData) {
      switch (item) {
        case "skills":
        case "languages":
          if (formData[item].length) {
            const keys = formData[item].map(x => x.value);
            url += `${item}=${keys.join("+")}&`;
          }
          break;
        default:
          const value = String(formData[item]).trim();
          if (value.length) url += `${item}=${value}&`;
          break;
      }
    }
    props.history.push(url.slice(0, -1));
    return url.slice(16, -1);
  };

  const multiSelectChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const radioChange = e => {
    const { value, name } = e.target;
    if (value !== undefined && name !== undefined) {
      setFormData(prevState => ({
        ...prevState,
        [name]: formData[name] !== value ? value : ""
      }));
    }
  };

  const clearAll = () => {
    setFormData({ ...initialState }, () => {
      props.history.push("/employer/search");
    });
  };

  const openPopUp = () => setShownPopUp(true);
  const closePopUp = () => setShownPopUp(false);
  const confirmSend = () => {
    setShownPopUp(false);
    alert("Request is successfuly sent");
  };
  const closeFilterPopUp = () => setShownFilterPopUp(false);

  const searchedResults = SEARCHED_RESULTS.map(
    ({ walletID, gender, age, skills, requested }) => (
      <SearchResult
        key={walletID}
        walletID={walletID}
        gender={gender}
        age={age}
        skills={skills}
        requested={requested}
        clickedSend={openPopUp}
      />
    )
  );

  return (
    <>
      <Styled.Container>
        <ShortInfo />
        <Styled.SearchInfo>
          <Styled.Found>
            We found {SEARCHED_RESULTS.length} users with similar skills
          </Styled.Found>
          <Styled.Option>
            <StyledCheckbox value="exact-match" />
            <p id="after">exact match</p>
          </Styled.Option>
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
          <Styled.Results>
            {searchedResults}
            <BlueTextBtn text="Send to all" />
            <Pagination />
          </Styled.Results>
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
