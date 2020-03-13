import React from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";

export default ({ clickedCancel, clickedOK }) => (
  <Styled.Container>
    <Styled.Title>
      Are you sure you want to open your <br /> resume for this company?
    </Styled.Title>
    <Styled.Companies>
      <Styled.CompanyInfo>Omertex</Styled.CompanyInfo>
      <Styled.CompanyInfo>Children Agency</Styled.CompanyInfo>
      <Styled.CompanyInfo>Lorem ipsum</Styled.CompanyInfo>
      <Styled.CompanyInfo>Lorem ipsum</Styled.CompanyInfo>
    </Styled.Companies>
    <Styled.Cost>You`ll get 0,8 token</Styled.Cost>
    <Styled.Buttons>
      <CancelBtn clicked={clickedCancel} text="Cancel" />
      <ContinueBtn clicked={clickedOK} text="Ok" />
    </Styled.Buttons>
  </Styled.Container>
);
