import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import Routes from "./Routing";
import * as ACTIONS from "../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageLoading from "../shared-components/PageLoading";

const App = ({
  history,
  authorize,
  savePrivateKey,
  savePublicKey,
  saveAddress,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const privateKey = localStorage.getItem("dxpert_private_key");
  const publicKey = localStorage.getItem("dxpert_public_key");
  const address = localStorage.getItem("dxpert_address");

  useEffect(() => {
    if (privateKey && publicKey && address) {
      setIsLoading(true);
      setTimeout(() => {
        authorize();
        savePrivateKey(privateKey);
        savePublicKey(publicKey);
        saveAddress(address);
        history.push("/applicant/profile");
        setIsLoading(false);
      }, 500);
    }
  }, []);

  return (
    <>
      {isLoading && <PageLoading />}
      <Styled.App>
        <Header />
        <Styled.Content>
          <Routes />
        </Styled.Content>
        <Footer />
      </Styled.App>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    authorize: () => dispatch(ACTIONS.authorize()),
    savePrivateKey: (privateKey) =>
      dispatch(ACTIONS.savePrivateKey(privateKey)),
    savePublicKey: (publicKey) =>
      dispatch(ACTIONS.generatePublicKey(publicKey)),
    saveAddress: (address) => dispatch(ACTIONS.saveAddress(address)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(App));
