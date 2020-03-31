import React from "react";
import * as Styled from "./styled";
import { ContinueBtn } from "../../../shared-components/Buttons";
import { Transition } from "react-transition-group";

const defaultStyle = {
  left: 75,
  right: 75,
  transition: "all 300ms ease-in",
};
const transitionStyles = {
  entering: { left: 75, right: 75 },
  entered: { left: 75, right: 75 },
  exiting: { left: -575, right: 575 },
  exited: { left: 75, right: 75 },
};

export default ({ isShownOurCommitment, closeOurCommitment }) => (
  <Transition
    in={isShownOurCommitment}
    timeout={300}
    mountOnEnter
    unmountOnExit
  >
    {(state) => (
      <Styled.Container
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <Styled.Title>Wallet creation tutorial</Styled.Title>
        <Styled.Subtitle>Our commitment</Styled.Subtitle>
        <Styled.Text>
          Dxpert is committed to providing you with the best and safest
          experience. We ask for a minute of your time to understand how
          decentralized wallets work and to take action in safeguarding
          yourself.
        </Styled.Text>
        <Styled.Buttons>
          <Styled.SkipTutorial to="/create-wallet">
            Skip tutorial (Not recommended)
          </Styled.SkipTutorial>
          <ContinueBtn clicked={closeOurCommitment} text="Next" />
        </Styled.Buttons>
      </Styled.Container>
    )}
  </Transition>
);
