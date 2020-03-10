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
import { SKILLS, LANGUAGES } from "../../configuration/TemporaryConsts";
import { PopUp } from "../../shared-components";
import PopUpContent from "./PopUpContent";
import PopUpFilter from "./PopUpFilter";
import { useLocation } from "react-router-dom";

const initialState = {
  skills: [],
  gender: {
    male: false,
    female: false
  },
  country: "",
  age: {
    from: "",
    to: ""
  },
  languages: [],
  experience: {
    from: "",
    to: ""
  },
  education: ""
};

let delayedSending;

export default props => {
  const urlParams = useLocation();
  const [oldUrl, setOldUrl] = useState();
  const [isShownPopUp, setShownPopUp] = useState(false);
  const [isShownFilterPopUp, setShownFilterPopUp] = useState();
  const [formData, setFormData] = useState({ ...initialState });

  useEffect(() => {
    setOldUrl(urlParams.search);
  }, []);

  useEffect(() => {
    if (urlParams.search !== oldUrl) {
      setOldUrl(urlParams.search);
      requestParsing();
    }
  });

  useEffect(() => {
    clearTimeout(delayedSending);

    delayedSending = setTimeout(() => {
      console.log(formData);
    }, 500);
  }, [formData]);

  const requestParsing = () => {
    const params = urlParams.search.slice(1).split("&");
    const couple = params.map(x => x.split("="));
    let newState = {};

    couple.map(item => {
      newState = {
        ...newState,
        [item[0]]: item[1]
      };
    });

    setFormData(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  const multiSelectChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const checkBoxChange = e => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      gender: {
        ...prevState.gender,
        [name]: checked
      }
    }));
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const rangeChange = (e, objName) => {
    const { value, name } = e.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [objName]: {
        ...prevState[objName],
        [name]: value
      }
    }));
  };

  const clearAll = () => {
    props.history.push("/employer/search");
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
                    <StyledCheckbox
                      value="male"
                      name="male"
                      onChange={checkBoxChange}
                      checked={formData.gender.male}
                    />
                    <p id="after">Male</p>
                  </Styled.Option>
                  <Styled.Option>
                    <StyledCheckbox
                      value="female"
                      name="female"
                      onChange={checkBoxChange}
                      checked={formData.gender.female}
                    />
                    <p id="after">Female</p>
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
                      name="from"
                      type="number"
                      onChange={e => rangeChange(e, "age")}
                      value={formData.age.from}
                    />
                  </Styled.Option>
                  <Styled.Option>
                    <p id="before">To</p>
                    <TextInput
                      width="55px"
                      name="to"
                      type="number"
                      onChange={e => rangeChange(e, "age")}
                      value={formData.age.to}
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
                  disabled={true}
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
                  disabled={true}
                />
              </Styled.Input>

              <Styled.Input>
                <p id="label">Work Experience</p>
                <Styled.Options>
                  <Styled.Option>
                    <p id="before">From</p>
                    <TextInput
                      width="55px"
                      name="from"
                      type="number"
                      onChange={e => rangeChange(e, "experience")}
                      value={formData.experience.from}
                      disabled={true}
                    />
                  </Styled.Option>
                  <Styled.Option>
                    <p id="before">To</p>
                    <TextInput
                      width="55px"
                      name="to"
                      type="number"
                      onChange={e => rangeChange(e, "experience")}
                      value={formData.experience.to}
                      disabled={true}
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
                  disabled={true}
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
      />
    </>
  );
};
