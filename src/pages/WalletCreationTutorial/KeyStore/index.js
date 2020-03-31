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

export default ({ isShownKeyStore, closeKeyStore }) => (
  <Transition in={isShownKeyStore} timeout={300} mountOnEnter unmountOnExit>
    {(state) => (
      <Styled.Container
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <Styled.Title>Wallet creation tutorial</Styled.Title>
        <Styled.Subtitle>Keystore File + Password</Styled.Subtitle>
        <Styled.Text>
          You can think of the keystore file like a “User ID”, while the
          password unlocks your wallet. Both are needed to access your wallet,
          so keep them safe.
        </Styled.Text>
        <Styled.Buttons>
          <Styled.SkipTutorial to="/create-wallet">
            Skip tutorial (Not recommended)
          </Styled.SkipTutorial>
          <ContinueBtn clicked={closeKeyStore} text="Next" />
        </Styled.Buttons>
      </Styled.Container>
    )}
  </Transition>
);
