import React, { useState, useRef } from "react";
import {ContinueBtn, PreviousBtn, RightCloseBtn} from "../../../shared-components/Buttons";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import { transitionStyles } from "../transitionStyles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as ACTIONS from "../../../store/actions";

const SecondaryAccess = withRouter(({
  isShown,
  clickedContinue,
  clickedPrevious,
  selectedMnemonics,
  history,
  createNewWallet
}) => {
  const [correctInput, setCorrectInput] = useState({});

  const checkInput = e => {
    if (e.target.value === e.target.name) {
      setCorrectInput({ ...correctInput, [e.target.id]: true });
    } else {
      setCorrectInput({ ...correctInput, [e.target.id]: false });
    }
  };

  const close = () => {
    createNewWallet();
    history.push("/");
  };

  const mainRef = useRef(null);

  const mnemonicsToBeChecked = selectedMnemonics.map(({ index, value }, i) => {
    return (
      <Styled.SinglePhrase key={i}>
        <span id="number">#{index + 1}</span>
        <Styled.InputPhrase
          ref={mainRef}
          tabIndex={i+1}
          id={i}
          name={value}
          onChange={checkInput}
          type="text"
          error={!correctInput[i]}
          correct={correctInput[i]}
        />
      </Styled.SinglePhrase>
    );
  });

  return (
    <Transition in={isShown} timeout={300} mountOnEnter unmountOnExit>
      {(state) => (
        <Styled.Paper
          style={{
            ...transitionStyles.default,
            ...transitionStyles.action[state],
          }}
        >
          <Styled.Container>
            <h2>Create New Wallet</h2>
            <h3>Choose secondary access</h3>
            <RightCloseBtn clicked={close} label={"Close"} />
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
});

const mapStateToProps = state => {
  return {
    selectedMnemonics: state.auth.selectedMnemonics
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewWallet: () => dispatch(ACTIONS.createNewWallet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryAccess);
