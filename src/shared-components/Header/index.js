import React, { useState } from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

const Header = props => {
  const [formData, setFormData] = useState({ quick: "" });

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const goToSearch = e => {
    if (e.key === "Enter") {
      const search = formData.quick.trim();
      if (search.length) {
        var re = /\s*,\s*/;
        const skills = search.split(re);
        setFormData({ quick: "" });
        props.history.push("/employer/search?skills=" + skills.join("+"));
      }
    }
  };

  const chosenWay = props.chosenWay;
  const isAuth = props.isAuth;
  return (
    <Styled.Header>
      <Styled.Container>
        <Link to={chosenWay ? "/" + chosenWay + "/profile" : "/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      {isAuth ? (
        chosenWay === "employer" ? (
          <>
            <Styled.Input>
              <QuickSearch
                name="quick"
                value={formData.quick}
                onKeyPress={goToSearch}
                onChange={handleChange}
              />
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

export default compose(withRouter, connect(mapStateToProps))(Header);
