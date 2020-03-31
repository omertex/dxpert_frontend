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

export default ({ isShownMnemonicPhrase, closeMnemonicPhrase }) => (
  <Transition
    in={isShownMnemonicPhrase}
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
        <Styled.Subtitle>Mnemonic phrase</Styled.Subtitle>
        <Styled.Text>
          24 words that are both the “User ID” and password. This is a secondary
          way to access your wallet if you lose your keystore file or forgot
          your password. Anyone who knows your mnemonic phrase can access your
          wallet, so keep it safe
        </Styled.Text>
        <Styled.Buttons>
          <Styled.SkipTutorial to="/create-wallet">
            Skip tutorial (Not recommended)
          </Styled.SkipTutorial>
          <ContinueBtn clicked={closeMnemonicPhrase} text="Next" />
        </Styled.Buttons>
      </Styled.Container>
    )}
  </Transition>
);
