import React, { useState } from "react";
import * as Styled from "./styled";
import CreatePassword from "./CreatePassword";
import SecurityNotification from "./SecurityNotification";
import BackupMnemonic from "./BackupMnemonic";
import SecondaryAccess from "./SecondaryAccess";
import Success from "./Success";
import { PopUp } from "../../shared-components";
import ViewMyKey from "./ViewMyKey";

export default () => {
  const [isShownCreatePswd, setShownCreatePswd] = useState(true);
  const [isShownSecNotification, setShownSecNotification] = useState(false);
  const [isShownBackupMnemonic, setShownBackupMnemonic] = useState(false);
  const [isShownSecondaryAccess, setShownSecondaryAccess] = useState(false);
  const [isShownSuccess, setShownSuccess] = useState(false);
  const [isShownPopUp, setShownPopUp] = useState(false);
  const [isShownConfirmation, setShownConfirmation] = useState(false);

  const toSecurityNotification = () => {
    setShownCreatePswd(false);
    setShownSecNotification(true);
  };

  const backToCreatePswd = () => {
    setShownCreatePswd(true);
    setShownSecNotification(false);
  };

  const toBackupMnemonic = () => {
    setShownSecNotification(false);
    setShownBackupMnemonic(true);
  };

  const backToSecurityNotification = () => {
    setShownSecNotification(true);
    setShownBackupMnemonic(false);
  };

  const toSecondaryAccess = () => {
    setShownConfirmation(false);
    setShownPopUp(false);
    setShownBackupMnemonic(false);
    setShownSecondaryAccess(true);
  };

  const backToBackupMnemonic = () => {
    setShownBackupMnemonic(true);
    setShownSecondaryAccess(false);
  };

  const toSuccess = () => {
    setShownSecondaryAccess(false);
    setShownSuccess(true);
  };

  // const toUnlockWallet = () => {
  //   setShownSuccess(false); // should go to the Unlock Wallet page
  // }

  const viewPrivateKey = () => {
    setShownPopUp(true);
  };

  const closeViewPrivateKey = () => {
    setShownPopUp(false);
  };

  const closePopUp = () => {
    setShownConfirmation(true);
  };

  const backToPrivateKey = () => {
    setShownConfirmation(false);
  };

  return (
    <>
      <Styled.Container>
        <CreatePassword
          clicked={toSecurityNotification}
          isShown={isShownCreatePswd}
        />
        <SecurityNotification
          clickedContinue={toBackupMnemonic}
          clickedPrevious={backToCreatePswd}
          isShown={isShownSecNotification}
        />
        <BackupMnemonic
          clickedContinue={toSecondaryAccess}
          clickedPrevious={backToSecurityNotification}
          isShown={isShownBackupMnemonic}
          viewPrivateKey={viewPrivateKey}
        />
        <SecondaryAccess
          clickedContinue={toSuccess}
          clickedPrevious={backToBackupMnemonic}
          isShown={isShownSecondaryAccess}
        />
        <Success
          // clickedContinue={ toUnlockWallet }
          isShown={isShownSuccess}
        />
      </Styled.Container>
      <PopUp isShownPopUp={isShownPopUp}>
        <ViewMyKey
          closePopUp={closePopUp}
          clickedGoBack={backToPrivateKey}
          clickedConfirm={closeViewPrivateKey}
          confirmClose={isShownConfirmation}
        />
      </PopUp>
    </>
  );
};
