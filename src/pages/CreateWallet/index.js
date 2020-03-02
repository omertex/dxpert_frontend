import React, { useState } from 'react';
import * as Styled from './styled';
import CreatePassword from './CreatePassword';
import SecurityNotification from './SecurityNotification';

export default () => {
  const [isShownCreatePswd, setShownCreatePswd] = useState(true);
  const [isShownSecNotification, setShownSecNotification] = useState(true);

  const toSecurityNotification = () => {
    setShownCreatePswd(false);
    setShownSecNotification(true);
  }

  const backToCreatePswd = () => {
    setShownCreatePswd(true);
    setShownSecNotification(false);
  }

  const toBackupMnemonic = () => {
    setShownSecNotification(false);
  }

  return (
    <Styled.Container>
      <Styled.Paper>
      <CreatePassword clicked={ toSecurityNotification } isShown={ isShownCreatePswd } />
      <SecurityNotification 
        clickedContinue={ toBackupMnemonic } 
        clickedPrevious={ backToCreatePswd }
        isShown={ isShownSecNotification } 
      />
      {/* <Styled.Paper>
        <h2>Create New Wallet</h2>
        <h3>Create Keystore File + Password</h3>
        <Styled.Form>
          <Styled.Inputs>
            <Password label="Set a new password" />
            <Confirm label="Re-enter password" />
          </Styled.Inputs>
          <ContinueBtn text="Download keystore file" disabled />
        </Styled.Form>
        <Styled.Unlock>Unlock an existing Wallet</Styled.Unlock>
        <Styled.Disclaimer>
          <StyledCheckbox />
            <p>I understand that DXpert cannot recover or reset my password or the keystore file. I will make a backup of the keystore file/password, keep them secret, complete all wallet creation steps and agree to all the <Link to="/">terms</Link></p>
        </Styled.Disclaimer>
      </Styled.Paper> */}
      </Styled.Paper>
    </Styled.Container>
  )
}