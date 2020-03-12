import React, { useState, memo } from "react";
import * as Styled from "./styled";
import {
  UploadBtn,
  CreateBtn,
  ContinueBtn
} from "../../shared-components/Buttons";
import UploadImg from "../../assets/images/upload.png";
import { Password } from "../../shared-components/StyledInput";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";
import axios from "axios";

const Unlock = memo(({
  history,
  chosenWay,
  pswd,
  authorize,
  createNewWallet,
  privateKey
}) => {
  const [isCorrectPassword, setCorrectPassword] = useState(true);
  const [inputPassword, setInputPassword] = useState("");
  const [selectedKeystore, setSelectedKeystore] = useState(null);
  const [isKeystoreUploaded, setKeystoreUploaded] = useState(false);
  const [savedKSName, setSavedKSName] = useState("");
  const [isWrongKeystore, setWrongKeystore] = useState(false);

  const checkPassword = e => {
    if (e.target.value === pswd) {
      setCorrectPassword(true);
      setInputPassword(e.target.value);
    } else {
      setCorrectPassword(false);
      setInputPassword(e.target.value);
    }
  };

  const onContinue = () => {
    axios.get(`/${savedKSName}`).then(res => {
      if (JSON.stringify(res.data) === JSON.stringify(privateKey)) {
        setWrongKeystore(false);
        authorize();
        history.push("/" + chosenWay + "/profile");
      } else {
        setWrongKeystore(true);
      }
    });
  };

  const uploadKeystoreHandler = e => {
    setSelectedKeystore(e.target.files[0]);
    setWrongKeystore(false);
  };

  const saveKeystoreHandler = () => {
    const formData = new FormData();
    formData.append("file", selectedKeystore);
    axios
      .post("http://localhost:4500/upload", formData)
      .then(res => {
        console.log(res);
        setSavedKSName(res.data.name);
      })
      .catch(err => console.log(err));
    setKeystoreUploaded(true);
  };

  return (
    <Styled.Container>
      <Styled.Paper>
        <h2>Unlock your Wallet</h2>
        <h3>Keystore file</h3>
        <Styled.Notification>
          Connect an encrypted wallet file and input your password
        </Styled.Notification>
        <UploadBtn
          clicked={saveKeystoreHandler}
          src={isKeystoreUploaded ? null : UploadImg}
          text="Upload keystore file"
          disabled={!selectedKeystore}
        >
          {isKeystoreUploaded && <Styled.Uploaded />}
        </UploadBtn>
        <Styled.SelectKeystore
          type="file"
          name="upload-keystore"
          id="upload-keystore"
          onChange={uploadKeystoreHandler}
        />
        <Styled.Label for="upload-keystore">Choose a file</Styled.Label>
        <Password
          changed={checkPassword}
          label="Enter your wallet password"
          width="100%"
          error={!isCorrectPassword}
        />
        {isWrongKeystore && (
          <Styled.WrongKeystore>
            <Styled.ErrorMark fontSize="small" />
            Wrong Keystore file...
          </Styled.WrongKeystore>
        )}
        <Styled.Buttons>
          <Styled.CreateNewWallet to="/create-wallet">
            <CreateBtn clicked={createNewWallet} text="Create new wallet" />
          </Styled.CreateNewWallet>
          <ContinueBtn
            disabled={!inputPassword || !isCorrectPassword}
            clicked={onContinue}
            text="Unlock the wallet"
          />
        </Styled.Buttons>
      </Styled.Paper>
    </Styled.Container>
  );
});

const mapStateToProps = state => {
  return {
    chosenWay: state.auth.chosenWay,
    pswd: state.auth.password,
    privateKey: state.auth.privateKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorize: () => dispatch(ACTIONS.authorize()),
    createNewWallet: () => dispatch(ACTIONS.createNewWallet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Unlock));
