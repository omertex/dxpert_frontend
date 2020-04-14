import React, { useState } from "react";
import * as Styled from "./styled";
import { ContinueBtn, CancelBtn } from "../../../shared-components/Buttons";
import { connect } from "react-redux";
import { sendTransaction } from "../../../store/sagas/requests";
import { encryptByPublicKey, mapCrypto } from "../../../configuration/helpers";

const PopUpAllowOne = ({
  publicKey,
  privateKey,
  address,
  account_number,
  sequence,
  cancel,
  data,
  applicant,
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
            <Styled.Cost>You`ll get 0,8 token</Styled.Cost>
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
        response: true,
        data: {
          name: encryptByPublicKey(rightData.publicKey, applicant.details.name),
          experience: JSON.stringify(
            mapCrypto({
              data: applicant.workExperience,
              cryptoKey: rightData.publicKey,
              cryptoFunction: encryptByPublicKey,
            })
          ),
          email: encryptByPublicKey(
            rightData.publicKey,
            applicant.contacts.email
          ),
          about: encryptByPublicKey(rightData.publicKey, applicant.aboutMe),
        },
        requester: rightData.address,
        owner: address,
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
      <Styled.Title>
        Are you sure you want to open your <br /> resume for this company?
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
    applicant: state.applicant,
  };
};

export default connect(mapStateToProps)(PopUpAllowOne);
