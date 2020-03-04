import React from 'react';
import * as Styled from './styled';

import { TextInput } from '../../../shared-components/FilterInputs'; 
import { ActionBtn, SubmitBtn } from '../../../shared-components/Buttons';
import { MultiSelect } from '../../../shared-components/MultiSelect';
import { SKILLS, LANGUAGES } from '../../../configuration/TemporaryConsts';
import StyledCheckbox from '../../../shared-components/StyledCheckbox';

export default () => (
  <Styled.Filters>
    <Styled.Header>
      <h3>Filters</h3>
      <ActionBtn text="Clear all" />
    </Styled.Header>
    <Styled.Form>

      <Styled.Input>
        <p id="label">Skills</p>
        <MultiSelect data={ SKILLS } width="100%" />
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
        <TextInput placeholder="Add Country" />
      </Styled.Input>

      <Styled.Input>
        <p id="label">Languages</p>
        <MultiSelect data={ LANGUAGES } placeholder="Add Languages" width="100%" />
      </Styled.Input>

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
        <TextInput placeholder="Level or Type" />
      </Styled.Input>

      <SubmitBtn text="Apply" width="100%" />

    </Styled.Form>
  </Styled.Filters>
)