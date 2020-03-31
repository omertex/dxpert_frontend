import React from "react";
import * as Styled from "./styled";
import { ContinueBtn, PreviousBtn } from "../../../shared-components/Buttons";
import Note from "../../../assets/images/note.png";
import { connect } from "react-redux";

const ViewMyKey = ({
  closePopUp,
  confirmClose,
  clickedGoBack,
  clickedConfirm,
  publicKey,
}) => (
  <Styled.Content>
    {confirmClose ? (
      <Styled.Confirmation>
        <Styled.Image src={Note} alt="Note your Mnemonic Phrase" />
        <Styled.Alert>
          Are you sure you have noted down your Mnemonic Phrase?
        </Styled.Alert>
        <Styled.Buttons>
          <PreviousBtn text="Go back" clicked={clickedGoBack} />
          <ContinueBtn text="Yes" clicked={clickedConfirm} />
        </Styled.Buttons>
      </Styled.Confirmation>
    ) : (
      <>
        <Styled.Title>Your private key</Styled.Title>
        <Styled.Note>
          Back up the text below on paper and keep it somewhere secret and safe
        </Styled.Note>
        <Styled.KeyDisplay>
          <p>{publicKey}</p>
        </Styled.KeyDisplay>
        <Styled.ButtonCover>
          <ContinueBtn clicked={closePopUp} text="Close" />
        </Styled.ButtonCover>
      </>
    )}
  </Styled.Content>
);

const mapStateToProps = (state) => {
  return {
    publicKey: state.auth.publicKey,
  };
};

export default connect(mapStateToProps)(ViewMyKey);
