import React from 'react';
import { ContinueBtn, PreviousBtn } from '../../../shared-components/Buttons';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';
import PasswordImg from '../../../assets/images/password.png';

const defaultStyle = {
  left: '50%',
  opacity: 0,
  transition: `all 200ms ease-in 100ms`
}
const transitionStyles = {
  entering: { left: '50%', opacity: 0 },
  entered: { left: '50%', opacity: 1 },
  exiting: { left: '40%', opacity: 1 },
  exited: { left: '40%', opacity: 0 }
}

export default ({ isShown, clickedContinue, clickedPrevious }) => (
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
          <Styled.Image src={ PasswordImg } alt="" />
          <Styled.Notification>We are about to show your mnemonic phrase, please ensure that no one else is looking at your screen.</Styled.Notification>
          <Styled.Buttons>
            <PreviousBtn 
                clicked={ clickedPrevious }
                text="Previous" />
            <ContinueBtn 
              clicked={ clickedContinue }
              text="Continue" />
          </Styled.Buttons>
        </Styled.Container>
      </Styled.Paper>
    ) }
  </Transition>
)