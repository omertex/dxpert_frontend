import React from 'react';
import * as Styled from './styled';
import { TextInput } from '../../shared-components/FilterInputs'; 
import { ActionBtn } from '../../shared-components/Buttons';

export default () => (
  <Styled.Container>
    <Styled.UserBlock></Styled.UserBlock>
    <Styled.SearchBlock>
      <Styled.Filters>
        <Styled.Header>
          <h3>Filters</h3>
          <ActionBtn text="Clear all" />
        </Styled.Header>
        <Styled.Input>
          <p id="label">Skills</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
        <Styled.Input>
          <p id="label">Gender</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
        <Styled.Input>
          <p id="label">Age</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
        <Styled.Input>
          <p id="label">Country</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
        <Styled.Input>
          <p id="label">Languages</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
        <Styled.Input>
          <p id="label">Work Experience</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
        <Styled.Input>
          <p id="label">Education</p>
          <TextInput placeholder="Input..." />
        </Styled.Input>
      </Styled.Filters>
    </Styled.SearchBlock>
  </Styled.Container>
)