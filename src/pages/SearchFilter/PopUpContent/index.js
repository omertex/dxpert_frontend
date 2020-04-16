import React, { useState } from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";
import { connect } from "react-redux";
import { sendTransaction } from "../../../store/sagas/requests";

const RequestResume = ({
  publicKey,
  privateKey,
  address,
  account_number,
  sequence,
  cancel,
  data,
}) => {
  const [showData, setShowData] = useState("info");
  const rightData = data.length ? data[0] : {};

  const RenderData = () => {
    switch (showData) {
      case "info":
        return (
          <>
            <Styled.UserInfo>
              <Styled.Gender>{rightData.sex}</Styled.Gender>
              <Styled.Age>{rightData.age}</Styled.Age>
            </Styled.UserInfo>
            <Styled.Cost>it costs 1 token</Styled.Cost>
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
    }
  };

  const senRequest = async () => {
    setShowData("loading");
    const requestBody = {
      type: "dxpert/RequestResume",
      value: {
        requested_address: rightData.requested_address,
        address: address,
        offer: [
          {
            denom: "coin",
            amount: "1",
          },
        ],
      },
    };
    const result = await sendTransaction(
      requestBody,
      { privateKey, publicKey, address },
      { account_number, sequence }
    );

    result ? setShowData("success") : setShowData("error");
  };

  return (
    <Styled.Container>
      <Styled.Title>Do you want to send a request to the user?</Styled.Title>
      {<RenderData />}
      <Styled.Buttons centered={showData !== "info"}>
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

export default connect(mapStateToProps)(RequestResume);
