import React from 'react';
import * as Styled from './styled';
import { UploadBtn, CreateBtn, ContinueBtn } from '../../shared-components/Buttons';
import UploadImg from '../../assets/images/upload.png';
import { Password } from '../../shared-components/StyledInput';

export default () => (
  <Styled.Container>
    <Styled.Paper>
      <h2>Unlock your Wallet</h2>
      <h3>Keystore file</h3>
      <Styled.Notification>Connect an encrypted wallet file and input your password</Styled.Notification>
      <UploadBtn src={ UploadImg } text="Upload keystroke file"/>
      <Password label="Enter your wallet password" width="100%"/>
      <Styled.Buttons>
        <Styled.CreateNewWallet to="/create-wallet">
          <CreateBtn text="Create new wallet" />
        </Styled.CreateNewWallet>
        <ContinueBtn text="Unlock the wallet" disabled />
      </Styled.Buttons>
    </Styled.Paper>
  </Styled.Container>
)