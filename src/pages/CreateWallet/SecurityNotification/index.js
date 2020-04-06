import React from "react";
import {
  ContinueBtn,
  PreviousBtn,
  RightCloseBtn,
} from "../../../shared-components/Buttons";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import PasswordImg from "../../../assets/images/password.png";
import { transitionStyles } from "../transitionStyles";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router-dom";

const SecurityNotification = withRouter(
  ({ isShown, clickedContinue, clickedPrevious, createNewWallet, history }) => {
    const close = () => {
      createNewWallet();
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
              <h3>Create Keystore File + Password</h3>
              <RightCloseBtn onClick={close} label={"Close"} />
              <Styled.Image src={PasswordImg} alt="" />
              <Styled.Notification>
                We are about to show your mnemonic phrase, please ensure that no
                one else is looking at your screen.
              </Styled.Notification>
              <Styled.Buttons>
                <PreviousBtn clicked={clickedPrevious} text="Previous" />
                <ContinueBtn clicked={clickedContinue} text="Continue" />
              </Styled.Buttons>
            </Styled.Container>
          </Styled.Paper>
        )}
      </Transition>
    );
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    createNewWallet: () => dispatch(actions.createNewWallet()),
  };
};

export default connect(null, mapDispatchToProps)(SecurityNotification);
