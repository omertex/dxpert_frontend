import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import Routes from "./Routing";
import * as ACTIONS from "../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageLoading from "../shared-components/PageLoading";

const App = ({ isAuth, loginByLocalStorage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const privateKey = localStorage.getItem("dxpert_private_key");
  const publicKey = localStorage.getItem("dxpert_public_key");
  const address = localStorage.getItem("dxpert_address");

  useEffect(() => {
    if (privateKey && publicKey && address) {
      loginByLocalStorage({
        privateKey,
        publicKey,
        address,
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuth) setIsLoading(false);
  }, [isAuth]);

  return (
    <>
      <Styled.App>
        <Header />
        <Styled.Content>
          {isLoading ? <PageLoading /> : <Routes />}
        </Styled.Content>
        <Footer />
      </Styled.App>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    chosenWay: state.auth.chosenWay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginByLocalStorage: (wallet) =>
      dispatch(ACTIONS.loginByLocalStorage(wallet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
