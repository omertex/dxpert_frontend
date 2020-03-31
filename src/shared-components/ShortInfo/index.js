import React from "react";
import * as Styled from "./styled";
import DefaultAvatar from "../../assets/images/default_avatar.svg";

export default ({ address }) => (
  <Styled.Container>
    <Styled.Profile>
      <Styled.Avatar src={DefaultAvatar} alt="Your avatar" />
      <Styled.NikName>Your Name</Styled.NikName>
    </Styled.Profile>
    {address && (
      <Styled.Wallet>
        <span>Wallet Address</span>
        <span>{address}</span>
      </Styled.Wallet>
    )}
  </Styled.Container>
);
