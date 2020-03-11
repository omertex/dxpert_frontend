import React from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ chosenWay, isAuth, getTsxById }) => (
  <Styled.Header>
    <Styled.Container>
      <Link to={chosenWay ? "/" + chosenWay + "/profile" : "/"}>
        <img src={Logo} alt="Logo" />
      </Link>
      {isAuth ? (
        chosenWay === "employer" ? (
          <>
            <Styled.Input>
              <QuickSearch />
            </Styled.Input>
            <Styled.Nav>
              <Styled.MenuLink to={"/" + chosenWay + "/requests"}>
                My requests
              </Styled.MenuLink>
              <Styled.MenuLink to={"/" + chosenWay + "/search"}>
                Search
              </Styled.MenuLink>
              <Styled.BalanceLink to={"/balance"}>
                1343
                <span>DXP</span>
              </Styled.BalanceLink>
            </Styled.Nav>
          </>
        ) : (
          <>
            <Styled.Nav>
              <Styled.MenuLink to={"/" + chosenWay + "/profile"}>
                My profile
              </Styled.MenuLink>
              <Styled.MenuLink to={"/" + chosenWay + "/requests"}>
                Requests
              </Styled.MenuLink>
              <Styled.BalanceLink to={"/balance"}>
                1343
                <span>DXP</span>
              </Styled.BalanceLink>
            </Styled.Nav>
          </>
        )
      ) : null}
    </Styled.Container>
  </Styled.Header>
);

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    chosenWay: state.auth.chosenWay
  };
};

export default connect(mapStateToProps)(Header);
