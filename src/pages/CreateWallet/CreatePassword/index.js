import React from 'react';
import { Password, Confirm } from '../../../shared-components/StyledInput';
import { ContinueBtn } from '../../../shared-components/Buttons';
import StyledCheckbox from '../../../shared-components/StyledCheckbox';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';
import { transitionStyles } from '../transitionStyles';

export default ({ isShown, clicked }) => (
  <Transition
    in={ isShown }
    timeout={ 300 }
    mountOnEnter
    unmountOnExit
  >
    { state => (
      <Styled.Paper
        style={{
          ...transitionStyles.default,
          ...transitionStyles.action[state]
        }}
      >
        <Styled.Container>
          <h2>Create New Wallet</h2>
          <h3>Create Keystore File + Password</h3>
          <Styled.Form>
            <Styled.Inputs>
              <Password label="Set a new password" />
              <Confirm label="Re-enter password" />
            </Styled.Inputs>
            <ContinueBtn 
              clicked={ clicked }
              text="Download keystore file" 
              disabled={ false } 
            />
          </Styled.Form>
          <Styled.Unlock to="/unlock-wallet">Unlock an existing Wallet</Styled.Unlock>
          <Styled.Disclaimer>
            <StyledCheckbox />
              <p>I understand that DXpert cannot recover or reset my password or the keystore file. I will make a backup of the keystore file/password, keep them secret, complete all wallet creation steps and agree to all the <Link to="/">terms</Link></p>
          </Styled.Disclaimer>
        </Styled.Container>
      </Styled.Paper>
    ) }
  </Transition>
)