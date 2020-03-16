import React, { useState } from "react";
import { Password, Confirm } from "../../../shared-components/StyledInput";
import { ContinueBtn, PreviousBtn } from "../../../shared-components/Buttons";
import StyledCheckbox from "../../../shared-components/StyledCheckbox";
import { Link, withRouter } from "react-router-dom";
import * as Styled from "./styled";
import { Transition } from "react-transition-group";
import { transitionStyles } from "../transitionStyles";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { temporaryMnemonics } from "../../../configuration/temporaryMnemonics";
import {
  generateMnemonics,
  constructMnemonicPhrase
} from "../../../configuration/helpers";

const defaultTip = {
  transform: "scale(0)",
  transformOrigin: "left top",
  transition: "all 100ms linear"
};
const transitionTip = {
  entering: { transform: "scale(0)" },
  entered: { transform: "scale(1)" },
  exiting: { transform: "scale(1)" },
  exited: { transform: "scale(0)" }
};

const defaultDownloading = {
  transform: "translate(-50%, -50%) scale(0)",
  transformOrigin: "center center"
};
const transitionDownloading = {
  entering: { transform: "translate(-50%, -50%) scale(0)" },
  entered: { transform: "translate(-50%, -50%) scale(1)" },
  exiting: { transform: "translate(-50%, -50%) scale(1)" },
  exited: { transform: "translate(-50%, -50%) scale(0)" }
};

const shouldInclude = /(?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/;

const CreatePassword = withRouter(
  ({
    isShown,
    clicked,
    setPswd,
    agreeTerms,
    pswd,
    agreedTerms,
    keyStoreFileDownloaded,
    history,
    genMnemonics,
    constMnemPhrase,
    genKeyPair
  }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [lengthError, setLengthError] = useState(false);
    const [includesError, setIncludesError] = useState(false);
    const [notConfirmed, setNotConfirmed] = useState(false);
    const [isDownloadingKeystore, setDownloadingKeystore] = useState(false);

    const checkConfirm = e => {
      if (e.target.value === pswd) {
        setNotConfirmed(false);
      } else {
        setNotConfirmed(true);
      }
    };

    const passwordChanged = e => {
      if (!confirmPassword) setNotConfirmed(true);
      if (e.target.value.length < 8) {
        setLengthError(true);
        setPassword(e.target.value);
      } else {
        setLengthError(false);
        setPassword(e.target.value);
      }
      if (shouldInclude.test(e.target.value)) {
        setIncludesError(false);
      } else {
        setIncludesError(true);
      }
      if (e.target.value.length > 7 && shouldInclude.test(e.target.value)) {
        setPswd(e.target.value);
      } else {
        setPswd("");
      }
    };

    const onDownloadKey = () => {
      setDownloadingKeystore(true);
      const mnems = generateMnemonics(temporaryMnemonics);
      const mnemPhrase = constructMnemonicPhrase(mnems);
      genMnemonics(mnems);
      constMnemPhrase(mnemPhrase);
      genKeyPair(mnemPhrase);
      setDownloadingKeystore(false);
    };

    const clickedNext = () => {
      clicked();
    };

    return (
      <>
        <Transition in={isShown} timeout={100} unmountOnExit>
          {state => (
            <Styled.Paper
              style={{
                ...transitionStyles.default,
                ...transitionStyles.action[state]
              }}
            >
              <Styled.Container>
                <h2>Create New Wallet</h2>
                <h3>Create Keystore File + Password</h3>
                <Styled.Form>
                  <Styled.Inputs>
                    <Password
                      label="Set a new password"
                      changed={passwordChanged}
                      value={password}
                      error={(lengthError || includesError) && true}
                    />
                    <Transition
                      in={lengthError || includesError || password}
                      timeout={{
                        appear: 0,
                        enter: 100,
                        exit: 100
                      }}
                      mountOnEnter
                      unmountOnExit
                    >
                      {state => (
                        <Styled.Tip
                          style={{
                            ...defaultTip,
                            ...transitionTip[state]
                          }}
                        >
                          <Styled.Requirements>
                            Your password must include the following properties:
                          </Styled.Requirements>
                          <Styled.Checkers>
                            <Styled.Lenght error={lengthError}>
                              8 or more characters
                            </Styled.Lenght>
                            <Styled.Includes error={includesError}>
                              An upper-case letter, symbol and a number
                            </Styled.Includes>
                          </Styled.Checkers>
                        </Styled.Tip>
                      )}
                    </Transition>
                    <Confirm
                      changed={checkConfirm}
                      label="Re-enter password"
                      // error={ true }
                    />
                    {notConfirmed && (
                      <Styled.ConfirmError>
                        The password entered does not match
                      </Styled.ConfirmError>
                    )}
                  </Styled.Inputs>
                </Styled.Form>
                {!keyStoreFileDownloaded ? (
                  <>
                    <ContinueBtn
                      clicked={onDownloadKey}
                      text="Download keystore file"
                      disabled={!(pswd && agreedTerms) || notConfirmed}
                    />
                    <Styled.Unlock to="/unlock-wallet">
                      Unlock an existing Wallet
                    </Styled.Unlock>
                  </>
                ) : (
                  <Styled.Buttons>
                    <PreviousBtn
                      clicked={() => history.push("/wallet-creation-tutorial")}
                      text="Previous"
                    />
                    <ContinueBtn
                      clicked={clickedNext}
                      text="Continue"
                      disabled={!agreedTerms}
                    />
                  </Styled.Buttons>
                )}
                <Styled.Disclaimer>
                  <StyledCheckbox
                    value="agreed-terms"
                    checked={agreedTerms}
                    onChange={agreeTerms}
                  />
                  <p>
                    I understand that DXpert cannot recover or reset my password
                    or the keystore file. I will make a backup of the keystore
                    file/password, keep them secret, complete all wallet
                    creation steps and agree to all the{" "}
                    <Link to="/">terms</Link>
                  </p>
                </Styled.Disclaimer>
              </Styled.Container>
            </Styled.Paper>
          )}
        </Transition>
        <Transition
          in={isDownloadingKeystore}
          timeout={0}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <Styled.DownloadingKeystore
              style={{
                ...defaultDownloading,
                ...transitionDownloading[state]
              }}
            >
              <Styled.Loading />
            </Styled.DownloadingKeystore>
          )}
        </Transition>
      </>
    );
  }
);

const mapStateToProps = state => {
  return {
    pswd: state.auth.password,
    agreedTerms: state.auth.agreedTerms,
    keyStoreFileDownloaded: state.auth.keyStoreFileDownloaded,
    mnemonics: state.auth.mnemonics,
    mnemonicPhrase: state.auth.mnemonicPhrase
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPswd: password => dispatch(actions.setPassword(password)),
    agreeTerms: () => dispatch(actions.agreeTerms()),
    downloadKeystoreFile: () => dispatch(actions.downloadKeystoreFile()),
    genMnemonics: mnems => dispatch(actions.generateMnemonics(mnems)),
    genPublicKey: publicKey => dispatch(actions.generatePublicKey(publicKey)),
    savePrivateKey: privateKey => dispatch(actions.savePrivateKey(privateKey)),
    constMnemPhrase: phrase => dispatch(actions.constructMnemonicPhrase(phrase)),
    genKeyPair: phrase => dispatch(actions.generateKeyPair(phrase))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePassword);
