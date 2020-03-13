import React from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";

export default ({ clickedCancel, clickedOK }) => (
  <Styled.Container>
    <Styled.Title>Do you want to send a request to the user?</Styled.Title>
    <Styled.UserInfo>
      <Styled.ID>Wallet ID</Styled.ID>
      <Styled.Gender>M</Styled.Gender>
      <Styled.Age>28</Styled.Age>
    </Styled.UserInfo>
    <Styled.Cost>it costs 1 token</Styled.Cost>
    <Styled.Buttons>
      <CancelBtn clicked={clickedCancel} text="Cancel" />
      <ContinueBtn clicked={clickedOK} text="Ok" />
    </Styled.Buttons>
  </Styled.Container>
);
