import React, { useEffect, useState } from "react";
import * as Styled from "./styled";

import { TextInput } from "../../../shared-components/FilterInputs";
import { ActionBtn } from "../../../shared-components/Buttons";
import { MultiSelect } from "../../../shared-components/MultiSelect";
import { SKILLS, LANGUAGES } from "../../../configuration/TemporaryConsts";
import StyledCheckbox from "../../../shared-components/StyledCheckbox";

const initialState = {
  skills: [],
  gender: {
    male: false,
    female: false,
  },
  country: "",
  age: {
    from: "",
    to: "",
  },
  languages: [],
  experience: {
    from: "",
    to: "",
  },
  education: "",
};

let delayedSending;

export default ({ callback }) => {
  const [formData, setFormData] = useState({ ...initialState });

  useEffect(() => {
    clearTimeout(delayedSending);

    delayedSending = setTimeout(() => {
      callback({ ...formData });
    }, 500);
  }, [formData]);

  const multiSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      gender: {
        ...prevState.gender,
        [name]: checked,
      },
    }));
  };

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const rangeChange = (e, objName) => {
    const { value, name } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [objName]: {
        ...prevState[objName],
        [name]: value,
      },
    }));
  };

  const clearAll = () => {
    setFormData(initialState);
  };

  return (
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
                onChange={(e) => rangeChange(e, "age")}
                value={formData.age.from}
              />
            </Styled.Option>
            <Styled.Option>
              <p id="before">To</p>
              <TextInput
                width="55px"
                name="to"
                type="number"
                onChange={(e) => rangeChange(e, "age")}
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
                name="from"
                type="number"
                onChange={(e) => rangeChange(e, "experience")}
                value={formData.experience.from}
              />
            </Styled.Option>
            <Styled.Option>
              <p id="before">To</p>
              <TextInput
                width="55px"
                name="to"
                type="number"
                onChange={(e) => rangeChange(e, "experience")}
                value={formData.experience.to}
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
  );
};
