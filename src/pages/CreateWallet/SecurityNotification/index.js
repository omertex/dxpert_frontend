import React from 'react';
import { ContinueBtn, PreviousBtn } from '../../../shared-components/Buttons';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';
import { PasswordImg } from '../../../assets/images/password.png';

const defaultStyle = {
  left: 160,
  transition: `all 600ms ease-in 200ms`
}
const transitionStyles = {
  entering: { left: 160 },
  entered: { left: 160 },
  exiting: { left: -770 },
  exited: { left: -770 }
}

export default ({ isShown, clickedContinue, clickedPrevious }) => (
  <Transition
    in={ isShown }
    timeout={ 200 }
  >
    { state => (
      <Styled.Container
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <h2>Create New Wallet</h2>
        <h3>Create Keystore File + Password</h3>
        <Styled.Image src={ PasswordImg } />
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
    ) }
  </Transition>
)