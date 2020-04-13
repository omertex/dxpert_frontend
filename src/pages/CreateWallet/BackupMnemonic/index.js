import React from "react";
import {
  ContinueBtn,
  PreviousBtn,
  RightCloseBtn,
} from "../../../shared-components/Buttons";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import { transitionStyles } from "../transitionStyles";
import { connect } from "react-redux";
import { selectMnemonics } from "../../../configuration/helpers";
import * as ACTIONS from "../../../store/actions";
import { withRouter } from "react-router-dom";

const backupMnemonics = withRouter(
  ({
    isShown,
    clickedContinue,
    clickedPrevious,
    viewPrivateKey,
    mnemonics,
    selectMnems,
    history,
    logout,
  }) => {
    const showMnemonics = mnemonics.map(({ index, value }, i) => (
      <Styled.SingleMnemonic key={i}>
        <span id="number">{index + 1}</span>
        <p id="text">{value}</p>
      </Styled.SingleMnemonic>
    ));

    const onClickContinue = () => {
      selectMnems(selectMnemonics(mnemonics, 3));
      clickedContinue();
    };

    const onViewKeyClick = () => {
      viewPrivateKey();
    };

    const close = () => {
      logout();
      history.push("/");
    };

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
              <h3>Please back up mnemonic</h3>
              <RightCloseBtn onClick={close} label={"Close"} />
              <Styled.Notification>
                Back up the text below on paper and keep it somewhere secret and
                safe
              </Styled.Notification>
              <Styled.Mnemonics>{showMnemonics}</Styled.Mnemonics>
              <Styled.ViewMyKey onClick={onViewKeyClick}>
                View My Private Key
              </Styled.ViewMyKey>
              <Styled.Buttons>
                <PreviousBtn clicked={clickedPrevious} text="Previous" />
                <ContinueBtn clicked={onClickContinue} text="Continue" />
              </Styled.Buttons>
            </Styled.Container>
          </Styled.Paper>
        )}
      </Transition>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    mnemonics: state.auth.mnemonics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectMnems: (mnemonics) =>
      dispatch(ACTIONS.selectMnemonicsToCheck(mnemonics)),
    logout: () => dispatch(ACTIONS.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(backupMnemonics);
