import React from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";

export default ({ clickedCancel, clickedOK }) => (
  <Styled.Container>
    <Styled.Title>
      Are you sure you want to open your <br /> resume for this company?
    </Styled.Title>
    <Styled.UserInfo>
      <Styled.ID>Omertex</Styled.ID>
    </Styled.UserInfo>
    <Styled.Cost>You`ll get 0,8 token</Styled.Cost>
    <Styled.Buttons>
      <CancelBtn clicked={clickedCancel} text="Cancel" />
      <ContinueBtn clicked={clickedOK} text="Ok" />
    </Styled.Buttons>
  </Styled.Container>
);
