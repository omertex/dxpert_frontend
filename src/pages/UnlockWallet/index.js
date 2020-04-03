import React, { useState, memo } from "react";
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
import {
  generateWalletByPrivateKey,
  base64Decryption,
} from "../../configuration/helpers";
import PageLoading from "../../shared-components/PageLoading";
import { getAccountInfo } from "../../store/sagas/requests";

const shouldInclude = /(?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/;

const Unlock = memo(
  ({
    history,
    chosenWay,
    authorize,
    newWalletData,
    createNewWallet,
    setPassword,
    updateAccountInfo,
  }) => {
    const [isCorrectPassword, setCorrectPassword] = useState(true);
    const [inputPassword, setInputPassword] = useState("");
    const [isKeystoreUploaded, setKeystoreUploaded] = useState(false);
    const [isWrongKeystore, setWrongKeystore] = useState(false);
    const [chosenKeystore, setChosenKeystore] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const close = () => {
      createNewWallet();
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
        const privateKey = await base64Decryption(
          chosenKeystore,
          inputPassword
        );
        const wallet = generateWalletByPrivateKey(privateKey);
        getAccountInfo(wallet.address).then((result) => {
          newWalletData(wallet);
          updateAccountInfo(result);
          setPassword(inputPassword);
          setWrongKeystore(false);
          authorize();
          history.push("/" + chosenWay + "/profile");
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
        {isLoading && <PageLoading />}
        <Styled.Container>
          <Styled.Paper>
            <h2>Unlock your Wallet</h2>
            <h3>Keystore file</h3>
            <RightCloseBtn clicked={close} label={"Close"} />
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
              <Styled.Label for="upload-keystore">
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
                disabled={
                  !inputPassword || !isCorrectPassword || !chosenKeystore
                }
                clicked={onContinue}
                text="Unlock the wallet"
              />
            </Styled.Buttons>
          </Styled.Paper>
        </Styled.Container>
      </>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    chosenWay: state.auth.chosenWay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authorize: () => dispatch(ACTIONS.authorize()),
    newWalletData: (wallet) => dispatch(ACTIONS.createWalletData(wallet)),
    createNewWallet: () => dispatch(ACTIONS.createNewWallet()),
    setPassword: (password) => dispatch(ACTIONS.setPassword(password)),
    updateAccountInfo: (info) => dispatch(ACTIONS.updateAccountInfo(info)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Unlock));
