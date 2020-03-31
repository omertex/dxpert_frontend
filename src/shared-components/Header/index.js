import React, { useState } from "react";
import * as Styled from "./styled";
import { QuickSearch } from "../../shared-components/StyledInput";
import Logo from "../../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Header = ({ history, chosenWay, isAuth, coins, createNewWallet }) => {
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
        history.push("/employer/search?skills=" + skills.join("+"));
      }
    }
  };

  const logOut = () => {
    localStorage.removeItem("dxpert_private_key");
    localStorage.removeItem("dxpert_public_key");
    localStorage.removeItem("dxpert_address");
    createNewWallet();
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
                <Styled.MenuLink to={"/" + chosenWay + "/profile"}>
                  My profile
                </Styled.MenuLink>
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
                <span
                  style={{
                    color: "#cacaca",
                    font: "16px Open sans, sans-serif",
                    marginLeft: 10,
                    cursor: "pointer",
                  }}
                  onClick={logOut}
                >
                  >>
                </span>
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
                <span
                  style={{
                    color: "#cacaca",
                    font: "16px Open sans, sans-serif",
                    marginLeft: 30,
                    cursor: "pointer",
                  }}
                  onClick={logOut}
                >
                  >>
                </span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createNewWallet: () => dispatch(actions.createNewWallet()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
