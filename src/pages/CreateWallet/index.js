import React from 'react';
import * as Styled from './styled';
import { Password, Confirm } from '../../shared-components/StyledInput';

export default () => (
  <Styled.Container>
    <Styled.Paper>
      <h2>Create New Wallet</h2>
      <h3>Create Keystore File + Password</h3>
      <Styled.Form>
        <Styled.Inputs>
          <Password label="Set a new password" />
          <Confirm label="Re-enter password" />
        </Styled.Inputs>
      </Styled.Form>
    </Styled.Paper>
  </Styled.Container>
)