import React, { useState } from 'react';
import * as Styled from './styled';
import { UploadBtn, CreateBtn, ContinueBtn } from '../../shared-components/Buttons';
import UploadImg from '../../assets/images/upload.png';
import { Password } from '../../shared-components/StyledInput';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ACTIONS from '../../store/actions';

const Unlock = (({ history, chosenWay, pswd, authorize, createNewWallet }) => {
  const [isCorrectPassword, setCorrectPassword] = useState(true);
  const [inputPassword, setInputPassword] = useState("");

  const checkPassword = e => {
    if (e.target.value === pswd) {
      setCorrectPassword(true);
      setInputPassword(e.target.value);
    } else {
      setCorrectPassword(false);
      setInputPassword(e.target.value);
    }
  }

  const onContinue = () => {
    authorize();
    history.push("/" + chosenWay + "/profile");
  }

  return (
  <Styled.Container>
    <Styled.Paper>
      <h2>Unlock your Wallet</h2>
      <h3>Keystore file</h3>
      <Styled.Notification>Connect an encrypted wallet file and input your password</Styled.Notification>
      <UploadBtn src={ UploadImg } text="Upload keystore file"/>
      <Password 
        changed={ checkPassword }
        label="Enter your wallet password" 
        width="100%"
        error={ !isCorrectPassword }
      />
      <Styled.Buttons>
        <Styled.CreateNewWallet to="/create-wallet">
          <CreateBtn 
            clicked={ createNewWallet }
            text="Create new wallet" 
          />
        </Styled.CreateNewWallet>
        <ContinueBtn 
          disabled={ !inputPassword || !isCorrectPassword }
          clicked={ onContinue }
          text="Unlock the wallet"
        />
      </Styled.Buttons>
    </Styled.Paper>
  </Styled.Container>
  )
})

const mapStateToProps = state => {
  return {
    chosenWay: state.auth.chosenWay,
    pswd: state.auth.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authorize: () => dispatch(ACTIONS.authorize()),
    createNewWallet: () => dispatch(ACTIONS.createNewWallet())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Unlock));