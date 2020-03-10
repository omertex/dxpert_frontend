import React from "react";
import * as Styled from "./styled";

import { TextInput } from "../../../shared-components/FilterInputs";
import { ActionBtn, SubmitBtn } from "../../../shared-components/Buttons";
import { MultiSelect } from "../../../shared-components/MultiSelect";
import { SKILLS, LANGUAGES } from "../../../configuration/TemporaryConsts";
import StyledCheckbox from "../../../shared-components/StyledCheckbox";
import IconButton from "@material-ui/core/IconButton";

import { Transition } from "react-transition-group";

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

export default ({ closeFilter, isShown }) => (
  <Transition
    in={isShown}
    timeout={400}
    // mountOnEnter
    // unmountOnExit
  >
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
              <ActionBtn text="Clear all" />
              <SubmitBtn text="Apply" clicked={closeFilter} />
              <IconButton onClick={closeFilter}>
                <Styled.Close />
              </IconButton>
            </Styled.Header>
            <Styled.Form>
              <Styled.InputGroup>
                <Styled.Input id="skills">
                  <p id="label">Skills</p>
                  <MultiSelect data={SKILLS} width="100%" />
                </Styled.Input>

                <Styled.Input>
                  <p id="label">Gender</p>
                  <Styled.Options>
                    <Styled.Option>
                      <StyledCheckbox value="male" />
                      <p id="after">Male</p>
                    </Styled.Option>
                    <Styled.Option>
                      <StyledCheckbox value="female" />
                      <p id="after">Female</p>
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
                      <TextInput width="55px" />
                    </Styled.Option>
                    <Styled.Option>
                      <p id="before">To</p>
                      <TextInput width="55px" />
                    </Styled.Option>
                  </Styled.Options>
                </Styled.Input>

                <Styled.Input>
                  <p id="label">Country</p>
                  <MultiSelect
                    data={LANGUAGES}
                    placeholder="Add Country"
                    width="100%"
                  />
                </Styled.Input>

                <Styled.Input>
                  <p id="label">Languages</p>
                  <MultiSelect
                    data={LANGUAGES}
                    placeholder="Add Languages"
                    width="100%"
                  />
                </Styled.Input>
              </Styled.InputGroup>

              <Styled.InputGroup>
                <Styled.Input>
                  <p id="label">Work Experience</p>
                  <Styled.Options>
                    <Styled.Option>
                      <p id="before">From</p>
                      <TextInput width="55px" />
                    </Styled.Option>
                    <Styled.Option>
                      <p id="before">To</p>
                      <TextInput width="55px" />
                    </Styled.Option>
                  </Styled.Options>
                </Styled.Input>

                <Styled.Input>
                  <p id="label">Education</p>
                  <MultiSelect
                    data={LANGUAGES}
                    placeholder="Level or Type"
                    width="100%"
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
