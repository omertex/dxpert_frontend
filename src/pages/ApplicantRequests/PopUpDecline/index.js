import React from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";

export default ({ clickedCancel, clickedOK }) => (
  <Styled.Container>
    <Styled.Title>
      Are you sure you want to delete this <br /> request?
    </Styled.Title>
    <Styled.UserInfo>
      <Styled.ID>Omertex</Styled.ID>
    </Styled.UserInfo>
    <Styled.Buttons>
      <CancelBtn clicked={clickedCancel} text="Cancel" />
      <ContinueBtn clicked={clickedOK} text="Ok" />
    </Styled.Buttons>
  </Styled.Container>
);
