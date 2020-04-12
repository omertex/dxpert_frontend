import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import {
  UploadBtn,
  CreateBtn,
  ContinueBtn,
  RightCloseBtn,
} from "../../shared-components/Buttons";
import UploadImg from "../../assets/images/upload.png";
import { Password } from "../../shared-components/StyledInput";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";
import PageLoading from "../../shared-components/PageLoading";

const shouldInclude = /(?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/;

const Unlock = ({
  isAuth,
  history,
  createNewWallet,
  loginByKeyStore,
  logout,
}) => {
  useEffect(() => {
    if (isAuth) {
      setWrongKeystore(false);
      history.push("/profile");
    }
  }, [isAuth]);

  const [isCorrectPassword, setCorrectPassword] = useState(true);
  const [inputPassword, setInputPassword] = useState("");
  const [isKeystoreUploaded, setKeystoreUploaded] = useState(false);
  const [isWrongKeystore, setWrongKeystore] = useState(false);
  const [chosenKeystore, setChosenKeystore] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const close = () => {
    logout();
    history.push("/");
  };

  const checkPassword = (e) => {
    if (e.target.value.length > 7 && shouldInclude.test(e.target.value)) {
      setCorrectPassword(true);
      setInputPassword(e.target.value);
    } else {
      setCorrectPassword(false);
      setInputPassword(e.target.value);
    }
  };

  const onContinue = async () => {
    if (setCorrectPassword || chosenKeystore) {
      setIsLoading(true);
      loginByKeyStore({
        encryptedString: chosenKeystore,
        password: inputPassword,
      });
    } else {
      setWrongKeystore(true);
      setKeystoreUploaded(false);
      setChosenKeystore("");
    }
  };

  const handleFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", function () {
      const content = fileReader.result;
      setChosenKeystore(content);
      setKeystoreUploaded(true);
      setWrongKeystore(false);
    });
    fileReader.readAsText(file);
  };

  return (
    <>
      {isLoading && <PageLoading fullScreen />}
      <Styled.Container>
        <Styled.Paper>
          <h2>Unlock your Wallet</h2>
          <h3>Keystore file</h3>
          <RightCloseBtn onClick={close} label={"Close"} />
          <Styled.Notification>
            Connect an encrypted wallet file and input your password
          </Styled.Notification>
          <UploadBtn src={isKeystoreUploaded ? null : UploadImg}>
            {isKeystoreUploaded && <Styled.Uploaded />}
            <Styled.SelectKeystore
              type="file"
              name="upload-keystore"
              id="upload-keystore"
              onChange={(e) => handleFileChosen(e.target.files[0])}
            />
            <Styled.Label htmlFor="upload-keystore">
              Upload keystore file
            </Styled.Label>
          </UploadBtn>

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
              disabled={!inputPassword || !isCorrectPassword || !chosenKeystore}
              clicked={onContinue}
              text="Unlock the wallet"
            />
          </Styled.Buttons>
        </Styled.Paper>
      </Styled.Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginByKeyStore: (keystore) => dispatch(ACTIONS.loginByKeyStore(keystore)),
    createNewWallet: () => dispatch(ACTIONS.createNewWallet()),
    logout: () => dispatch(ACTIONS.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Unlock));
