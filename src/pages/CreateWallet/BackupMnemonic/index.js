import React from 'react';
import { ContinueBtn, PreviousBtn } from '../../../shared-components/Buttons';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';
import { transitionStyles } from '../transitionStyles';

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
          ...transitionStyles.default,
          ...transitionStyles.action[state]
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