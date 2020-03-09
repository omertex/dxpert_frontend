import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ chosenWay }) => {
  useEffect(() => {
    setDoRedirect(false);
  });

  const [doRedirect, setDoRedirect] = useState(false);
  const [formData, setFormData] = useState({});
  const [redirectURL, setRedirectURL] = useState();

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
        setRedirectURL("?s=" + skills.join("+"));
        setFormData({ quick: "" });
        setDoRedirect(true);
      }
    }
  };

  return (
    <Styled.Header>
      <Styled.Container>
        <Link to={chosenWay ? "/" + chosenWay + "/profile" : "/"}>
          <img src={Logo} alt="Logo" />
        </Link>
        {chosenWay === "employer" ? (
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
        )}
      </Styled.Container>
      {doRedirect && (
        <Redirect
          to={{
            pathname: "/employer/search",
            search: redirectURL
          }}
        />
      )}
    </Styled.Header>
  );
};

const mapStateToProps = state => {
  return {
    chosenWay: state.test.chosenWay
  };
};

export default connect(mapStateToProps)(Header);
