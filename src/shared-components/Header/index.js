import React, { useState } from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ history, chosenWay, isAuth, coins }) => {
  const [formData, setFormData] = useState({ quick: "" });

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const goToSearch = (e) => {
    if (e.key === "Enter") {
      const search = formData.quick.trim();
      if (search.length) {
        var re = /\s*,\s*/;
        const skills = search.split(re);
        setFormData({ quick: "" });
        history.push("/employer/search?skills=" + skills.join("%2C"));
      }
    }
  };

  return (
    <Styled.Header>
      <Styled.Container isAuth={isAuth}>
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
                  {coins}
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
                  {coins}
                  <span>DXP</span>
                </Styled.BalanceLink>
              </Styled.Nav>
            </>
          )
        ) : null}
      </Styled.Container>
    </Styled.Header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    chosenWay: state.auth.chosenWay,
    coins: state.auth.coins,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
