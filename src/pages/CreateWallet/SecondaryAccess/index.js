import React, { useState } from 'react';
import { ContinueBtn, PreviousBtn } from '../../../shared-components/Buttons';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';
import { transitionStyles } from '../transitionStyles';
import { connect } from 'react-redux';

const randomOne = Math.floor(Math.random() * 24);
const randomTwo = Math.floor(Math.random() * 24);
const randomThree = Math.floor(Math.random() * 24);

const SecondaryAccess =  ({ isShown, clickedContinue, clickedPrevious, mnemonics }) => {
  const [correctInput, setCorrectInput] = useState([
    {"first": true},
    {"second": true},
    {"third": true}
  ]);

  const checkInput = e => {
    if (e.target.value === e.target.name) {
      setCorrectInput([...correctInput, { [e.target.id]: true }]);
    } else {
      setCorrectInput([...correctInput, { [e.target.id]: false }]);
    }
  }

  return (
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
          <h3>Choose secondary access</h3>
          <Styled.Notification>Please select the Mnemonic Phrase in the correct order to ensure that your copy is correct</Styled.Notification>
          <Styled.Phrases>
            <Styled.SinglePhrase>
              <span id="number" >#{randomOne}</span>
              <Styled.InputPhrase 
                id="first"
                name={mnemonics[randomOne]}
                onChange={ checkInput } 
                type="text"
                error={ !correctInput["first"] } />
            </Styled.SinglePhrase>
            <Styled.SinglePhrase>
              <span id="number">#{randomTwo}</span>
              <Styled.InputPhrase 
                id="second"
                name={mnemonics[randomTwo]}
                onChange={ checkInput } 
                type="text"
                error={ !correctInput["second"] } />
            </Styled.SinglePhrase>
            <Styled.SinglePhrase>
              <span id="number">#{randomThree}</span>
              <Styled.InputPhrase 
                id="third"
                name={mnemonics[randomThree]}
                onChange={ checkInput } 
                type="text"
                error={ !correctInput["third"] } />
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
}

const mapStateToProps = state => {
  return {
    mnemonics: state.auth.mnemonics
  }
}

export default connect(mapStateToProps)(SecondaryAccess);