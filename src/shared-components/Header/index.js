import React from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

export default ({ chosenWay }) => (
  <Styled.Header>
    <Styled.Container>
      <Link to={"/" + chosenWay + "/profile"}>
      <img src={Logo} alt="Logo" />
      </Link>
      { chosenWay === "employer"
        ? <>
            <Styled.Input>
              <QuickSearch />
            </Styled.Input>
            <Styled.Nav>
              <Styled.MenuLink to={"/" + chosenWay + "/my-requests"}>My requests</Styled.MenuLink>
              <Styled.MenuLink to={"/" + chosenWay + "/search-filter"}>Search</Styled.MenuLink>
              <Styled.BalanceLink to={"/" + chosenWay + "/balance"}>
                1343
                <span>DXP</span>
              </Styled.BalanceLink>
            </Styled.Nav>
          </>
        : <>
            <Styled.Nav>
              <Styled.MenuLink to={"/" + chosenWay + "/profile"}>My profile</Styled.MenuLink>
              <Styled.MenuLink to={"/" + chosenWay + "/my-requests"}>Requests</Styled.MenuLink>
              <Styled.BalanceLink to={"/" + chosenWay + "/balance"}>
                1343
                <span>DXP</span>
              </Styled.BalanceLink>
            </Styled.Nav>
          </>
      }
    </Styled.Container>
  </Styled.Header>
);
