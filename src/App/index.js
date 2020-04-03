import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import Routes from "./Routing";
import * as ACTIONS from "../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageLoading from "../shared-components/PageLoading";
import { getAccountInfo } from "../store/sagas/requests";

const App = ({ history, authorize, updateKeyPair, updateAccountInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const privateKey = localStorage.getItem("dxpert_private_key");
  const publicKey = localStorage.getItem("dxpert_public_key");
  const address = localStorage.getItem("dxpert_address");

  useEffect(() => {
    if (privateKey && publicKey && address) {
      setIsLoading(true);
      getAccountInfo(address).then((result) => {
        updateKeyPair({
          privateKey,
          publicKey,
          address,
        });
        updateAccountInfo(result);
        authorize();
        history.push("/applicant/profile");
        setIsLoading(false);
      });
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
    updateKeyPair: (wallet) => dispatch(ACTIONS.updateKeyPair(wallet)),
    updateAccountInfo: (info) => dispatch(ACTIONS.updateAccountInfo(info)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(App));
