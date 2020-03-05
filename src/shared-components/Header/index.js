import React from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";

export default () => (
  <Styled.Header>
    {/* <Styled.ContainerCenter>
      <img src={ Logo } alt="Logo" />
    </Styled.ContainerCenter> */}
    <Styled.Container>
      <img src={Logo} alt="Logo" />
      <Styled.Input>
        <QuickSearch />
      </Styled.Input>
      <Styled.Nav>
        <Styled.MenuLink to="/profile">My Profile</Styled.MenuLink>
        <Styled.MenuLink to="/my-requests">My requests</Styled.MenuLink>
        <Styled.MenuLink to="/search-filter">Search</Styled.MenuLink>
        <Styled.BalanceLink to="/balance">
          1343
          <span>DXP</span>
        </Styled.BalanceLink>
      </Styled.Nav>
    </Styled.Container>
  </Styled.Header>
);
