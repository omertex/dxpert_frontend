import React, { useState } from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";
import { connect } from "react-redux";
import { getAccountInfo, sendTransaction } from "../../../store/sagas/requests";
import * as ACTIONS from "../../../store/actions";

const DeclineResume = ({
  publicKey,
  privateKey,
  address,
  account_number,
  sequence,
  cancel,
  data,
  saveCoins,
}) => {
  const [showData, setShowData] = useState("info");
  const rightData = data.length ? data[0] : {};

  const RenderData = () => {
    switch (showData) {
      case "info":
        return (
          <>
            <Styled.UserInfo>
              <Styled.ID>Omertex</Styled.ID>
            </Styled.UserInfo>
          </>
        );
      case "success":
        return (
          <Styled.SuccessMessage>
            Request is successfuly sent
          </Styled.SuccessMessage>
        );
      case "error":
        return (
          <Styled.ErrorMessage>Request has not been sent</Styled.ErrorMessage>
        );
      case "loading":
        return <Styled.Loading />;
      default:
        return;
    }
  };

  const senRequest = async () => {
    setShowData("loading");
    const requestBody = {
      type: "dxpert/Response",
      value: {
        response: false,
        data: {
          name: "",
          experience: "[]",
          email: "",
          about: "",
        },
        requester: rightData.address,
        address,
      },
    };
    const result = await sendTransaction(
      requestBody,
      { privateKey, publicKey, address },
      { account_number, sequence }
    );

    const accountInfo = await getAccountInfo(address);
    saveCoins(accountInfo.coins);

    result ? setShowData("success") : setShowData("error");
  };

  return (
    <Styled.Container>
      <Styled.Title>
        Are you sure you want to delete this <br /> request?
      </Styled.Title>
      {<RenderData />}
      <Styled.Buttons>
        <CancelBtn clicked={cancel} text="Cancel" />
        {showData === "info" ? (
          <ContinueBtn clicked={senRequest} text="Ok" />
        ) : null}
      </Styled.Buttons>
    </Styled.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    publicKey: state.auth.publicKey,
    privateKey: state.auth.privateKey,
    address: state.auth.address,
    account_number: state.auth.account_number,
    sequence: state.auth.sequence,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCoins: (coins) => dispatch(ACTIONS.saveCoins(coins)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeclineResume);
