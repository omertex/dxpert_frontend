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

export default ({ isShownPrivateKey, closePrivateKey }) => (
  <Transition in={isShownPrivateKey} timeout={300} mountOnEnter unmountOnExit>
    {(state) => (
      <Styled.Container
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <Styled.Title>Wallet creation tutorial</Styled.Title>
        <Styled.Subtitle>Private key</Styled.Subtitle>
        <Styled.Text>
          This is an alternative representationof the mnemonic phase words.
          DXpert requires all users to use the keystore file + password; and
          choose betweenn the mnemonic phrase or private key as a secondary
          method
        </Styled.Text>
        <Styled.CreateWallet to="/create-wallet">
          <ContinueBtn text="Create wallet" />
        </Styled.CreateWallet>
      </Styled.Container>
    )}
  </Transition>
);
