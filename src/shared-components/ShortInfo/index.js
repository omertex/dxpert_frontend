import React from "react";
import * as Styled from "./styled";
import DefaultAvatar from "../../assets/images/default_avatar.svg";

export default () => (
  <Styled.Container>
    <Styled.Profile>
      <Styled.Avatar src={DefaultAvatar} alt="Your avatar" />
      <Styled.NikName>Your Name</Styled.NikName>
    </Styled.Profile>
    <Styled.Wallet>
      <span>Wallet ID</span>
      <span>xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span>
    </Styled.Wallet>
  </Styled.Container>
);
