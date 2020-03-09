import React, { useState, useRef, useEffect } from "react";
import { ContinueBtn, PreviousBtn } from "../../../shared-components/Buttons";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import { transitionStyles } from "../transitionStyles";
import { connect } from "react-redux";
import * as ACTIONS from '../../../store/actions';

const SecondaryAccess = ({
  isShown,
  clickedContinue,
  clickedPrevious,
  selectedMnemonics,
}) => {
  const [correctInput, setCorrectInput] = useState({});

  const checkInput = e => {
    if (e.target.value === e.target.name) {
      setCorrectInput({ ...correctInput, [e.target.id]: true });
    } else {
      setCorrectInput({ ...correctInput, [e.target.id]: false });
    }
  };

  const mainRef = useRef(null);

  const mnemonicsToBeChecked = selectedMnemonics.map(({ index, value }, i) => {
    return (
      <Styled.SinglePhrase>
        <span id="number">#{index + 1}</span>
        <Styled.InputPhrase
          ref={mainRef}
          tabIndex={i+1}
          id={i}
          name={value}
          onChange={checkInput}
          type="text"
          error={!correctInput[i]}
        />
      </Styled.SinglePhrase>
    );
  });

  return (
    <Transition in={isShown} timeout={300} mountOnEnter unmountOnExit>
      {state => (
        <Styled.Paper
          style={{
            ...transitionStyles.default,
            ...transitionStyles.action[state]
          }}
        >
          <Styled.Container>
            <h2>Create New Wallet</h2>
            <h3>Choose secondary access</h3>
            <Styled.Notification>
              Please select the Mnemonic Phrase in the correct order to ensure
              that your copy is correct
            </Styled.Notification>
            <Styled.Phrases>{mnemonicsToBeChecked}</Styled.Phrases>
            <Styled.Buttons>
              <PreviousBtn clicked={clickedPrevious} text="Previous" />
              <ContinueBtn
                clicked={clickedContinue}
                text="Continue"
                disabled={
                  !correctInput["0"] ||
                  !correctInput["1"] ||
                  !correctInput["2"] ||
                  correctInput["0"] === false ||
                    correctInput["1"] === false ||
                    correctInput["2"] === false
                }
              />
            </Styled.Buttons>
          </Styled.Container>
        </Styled.Paper>
      )}
    </Transition>
  );
};

const mapStateToProps = state => {
  return {
    selectedMnemonics: state.auth.selectedMnemonics
  };
};

export default connect(mapStateToProps)(SecondaryAccess);
