import React from 'react';
import { Password, Confirm } from '../../../shared-components/StyledInput';
import { ContinueBtn } from '../../../shared-components/Buttons';
import StyledCheckbox from '../../../shared-components/StyledCheckbox';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  left: '50%',
  opacity: 1,
  transition: `all 300ms ease-in 100ms`
}
const transitionStyles = {
  entering: { left: '50%', opacity: 0, },
  entered: { left: '50%', opacity: 1, },
  exiting: { left: '40%', opacity: 0, },
  exited: { left: '50%', opacity: 0, }
}

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
          ...defaultStyle,
          ...transitionStyles[state]
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
          <Styled.Unlock>Unlock an existing Wallet</Styled.Unlock>
          <Styled.Disclaimer>
            <StyledCheckbox />
              <p>I understand that DXpert cannot recover or reset my password or the keystore file. I will make a backup of the keystore file/password, keep them secret, complete all wallet creation steps and agree to all the <Link to="/">terms</Link></p>
          </Styled.Disclaimer>
        </Styled.Container>
      </Styled.Paper>
    ) }
  </Transition>
)