import React from "react";
import * as Styled from "./styled";
import DefaultAvatar from "../../assets/images/default_avatar.svg";

export default ({ avatar, name, address }) => (
  <Styled.Container>
    <Styled.Profile>
      <Styled.Avatar src={avatar || DefaultAvatar} alt="Your avatar" />
      <Styled.NikName>{name || "Your Name"}</Styled.NikName>
    </Styled.Profile>
    {address && (
      <Styled.Wallet>
        <span>Wallet Address</span>
        <span>{address}</span>
      </Styled.Wallet>
    )}
  </Styled.Container>
);
