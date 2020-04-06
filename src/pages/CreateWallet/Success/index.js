import React from "react";
import { ContinueBtn, RightCloseBtn } from "../../../shared-components/Buttons";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import SuccessImg from "../../../assets/images/success.png";
import { transitionStyles } from "../transitionStyles";
import { withRouter } from "react-router-dom";
import * as ACTIONS from "../../../store/actions";
import { connect } from "react-redux";

const Success = withRouter(
  ({ isShown, clickedContinue, history, createNewWallet }) => {
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
              <Styled.Image src={SuccessImg} alt="" />
              <h3 style={{ textAlign: "center" }}>Successfully!</h3>
              <RightCloseBtn onClick={close} label={"Close"} />
              <Styled.Notification>
                You are ready to use the DXpert Wallet and Decentralized
                Exchange!
              </Styled.Notification>
              <Styled.UnlockWallet to="/unlock-wallet">
                <ContinueBtn
                  clicked={clickedContinue}
                  text="Unlock the wallet"
                />
              </Styled.UnlockWallet>
            </Styled.Container>
          </Styled.Paper>
        )}
      </Transition>
    );
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    createNewWallet: () => dispatch(ACTIONS.createNewWallet()),
  };
};

export default connect(null, mapDispatchToProps)(Success);
