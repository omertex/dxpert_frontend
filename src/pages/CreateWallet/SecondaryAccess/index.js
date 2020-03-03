import React from 'react';
import { ContinueBtn, PreviousBtn } from '../../../shared-components/Buttons';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';

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
          <h3>Choose secondary access</h3>
          <Styled.Notification>Please select the Mnemonic Phrase in the correct order to ensure that your copy is correct</Styled.Notification>
          <Styled.Phrases>
            <Styled.SinglePhrase>
              <span id="number">#1</span>
              <Styled.InputPhrase type="text" />
            </Styled.SinglePhrase>
            <Styled.SinglePhrase>
              <span id="number">#2</span>
              <Styled.InputPhrase type="text" />
            </Styled.SinglePhrase>
            <Styled.SinglePhrase>
              <span id="number">#3</span>
              <Styled.InputPhrase type="text" />
            </Styled.SinglePhrase>
          </Styled.Phrases>
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