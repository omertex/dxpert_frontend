import React, { useState } from "react";
import * as Styled from "./styled";

import { TextInput } from "../../../shared-components/FilterInputs";
import { ActionBtn, SubmitBtn } from "../../../shared-components/Buttons";
import { MultiSelect } from "../../../shared-components/MultiSelect";
import {
  SKILLS,
  LANGUAGES,
  GENDER
} from "../../../configuration/TemporaryConsts";
import { RadioBtn } from "../../../shared-components/StyledRadioBtn";
import IconButton from "@material-ui/core/IconButton";
import { Transition } from "react-transition-group";

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

const defaultStyle = {
  height: 1400,
  overflow: "hidden",
  transition: "all 300ms ease-in"
};
const transitionStyles = {
  enetering: { height: 0 },
  entered: { height: 1400 },
  exiting: { height: 1400 },
  exited: { height: 0 }
};

export default ({ closeFilter, isShown, setData }) => {
  const [formData, setFormData] = useState({ ...initialState });

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
    setFormData({ ...initialState });
  };

  const sendFormData = () => {
    setData({ ...formData });
    closeFilter();
  };

  return (
    <Transition in={isShown} timeout={400}>
      {state => (
        <Styled.Underlayer
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Styled.Paper>
            <Styled.Filters>
              <Styled.Header>
                <h3>Filters</h3>
                <ActionBtn text="Clear all" clicked={clearAll} />
                <SubmitBtn text="Apply" clicked={sendFormData} />
                <IconButton onClick={closeFilter}>
                  <Styled.Close />
                </IconButton>
              </Styled.Header>
              <Styled.Form>
                <Styled.InputGroup>
                  <Styled.Input id="skills">
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
                </Styled.InputGroup>

                <Styled.InputGroup>
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
                </Styled.InputGroup>

                <Styled.InputGroup>
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
                </Styled.InputGroup>
              </Styled.Form>
            </Styled.Filters>
          </Styled.Paper>
        </Styled.Underlayer>
      )}
    </Transition>
  );
};
