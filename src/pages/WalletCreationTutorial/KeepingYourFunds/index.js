import React from 'react';
import * as Styled from './styled';
import { ContinueBtn } from '../../../shared-components/Buttons';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  left: 75,
  right: 75,
  transition: 'all 300ms ease-in'
}
const transitionStyles = {
  entering: { left: 75, right: 75 },
  entered: { left: 75, right: 75 },
  exiting: { left: -575, right: 575 },
  exited: { left: 75, right: 75 }
}

export default ({ isShownKeepingYourFunds, closeKeepingYourFunds }) => (
  <Transition
    in={ isShownKeepingYourFunds }
    timeout={ 300 }
    mountOnEnter
    unmountOnExit
  >
    { state => (
      <Styled.Container
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
      <Styled.Title>Wallet creation tutorial</Styled.Title>
      <Styled.Subtitle>Keeping your funds</Styled.Subtitle>
      <Styled.Text>You are solely responsible for keeping your funds. No one else, not even DXpert, can help you recover your wallet if you lose it.</Styled.Text>
      <Styled.Buttons>
        <Styled.SkipTutorial to="/create-wallet">Skip tutorial (Not recommended)</Styled.SkipTutorial>
        <ContinueBtn 
          clicked={ closeKeepingYourFunds }
          text="Next"
        />
      </Styled.Buttons>
    </Styled.Container>
    ) }
  </Transition>
)