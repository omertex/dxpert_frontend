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

export default ({ isShown, clickedContinue, clickedPrevious, viewPrivateKey }) => (
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
          <h3>Please back up mnemonic</h3>
          <Styled.Notification>Back up the text below on paper and keep it somewhere secret and safe</Styled.Notification>
          <Styled.Mnemonics>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
            <Styled.SingleMnemonic>
              <span id="number">#1</span>
              <p id="text">lorem</p>
            </Styled.SingleMnemonic>
          </Styled.Mnemonics>
          <Styled.ViewMyKey onClick={ viewPrivateKey }>View My Private Key</Styled.ViewMyKey>
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