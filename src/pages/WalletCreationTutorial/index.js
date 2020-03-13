import React, { useState } from 'react';
import * as Styled from './styled';
import { PopUp } from '../../shared-components';
import CreatePassword from '../CreateWallet/CreatePassword';
import OurCommitment from './OurCommitment';
import KeepingYourFunds from './KeepingYourFunds';
import KeyStore from './KeyStore';
import MnemonicPhrase from './MnemonicPhrase';
import PrivateKey from './PrivateKey';

export default () => {
  const [isShownOurCommitment, setShownOurCommitment] = useState(true);
  const [isShownKeepingYourFunds, setShownKeepingYourFunds] = useState(false);
  const [isShownKeyStore, setShownKeyStore] = useState(false);
  const [isShownMnemonicPhrase, setShownMnemonicPhrase] = useState(false);
  const [isShownPrivateKey, setShownPrivateKey] = useState(false);

  const closeOurCommitment = () => {
    setShownOurCommitment(false);
    setShownKeepingYourFunds(true);
  }
  const closeKeepingYourFunds = () => {
    setShownKeepingYourFunds(false);
    setShownKeyStore(true);
  }
  const closeKeyStore = () => {
    setShownKeyStore(false);
    setShownMnemonicPhrase(true);
  }
  const closeMnemonicPhrase = () => {
    setShownMnemonicPhrase(false);
    setShownPrivateKey(true);
  }

  return (
    <>
      <Styled.Container>
        <CreatePassword isShown/>
      </Styled.Container>
      <PopUp isShownPopUp={ true }>
        <Styled.PopUpContent>
          <Styled.UpperProgressBar>
            <Styled.Segment active={ isShownOurCommitment } />
            <Styled.Segment active={ isShownKeepingYourFunds } />
            <Styled.Segment active={ isShownKeyStore } />
            <Styled.Segment active={ isShownMnemonicPhrase } />
            <Styled.Segment active={ isShownPrivateKey } />
          </Styled.UpperProgressBar>
          <OurCommitment 
            isShownOurCommitment={ isShownOurCommitment }
            closeOurCommitment={ closeOurCommitment }
          />
          <KeepingYourFunds 
            isShownKeepingYourFunds={ isShownKeepingYourFunds }
            closeKeepingYourFunds={ closeKeepingYourFunds }
          />
          <KeyStore 
            isShownKeyStore={ isShownKeyStore }
            closeKeyStore={ closeKeyStore }
          />
          <MnemonicPhrase 
            isShownMnemonicPhrase={ isShownMnemonicPhrase }
            closeMnemonicPhrase={ closeMnemonicPhrase }
          />
          <PrivateKey 
            isShownPrivateKey={ isShownPrivateKey }
          />
          <Styled.LowerProgressBar>
            <Styled.Segment active={ isShownOurCommitment } />
            <Styled.Segment active={ isShownKeepingYourFunds } />
            <Styled.Segment active={ isShownKeyStore } />
            <Styled.Segment active={ isShownMnemonicPhrase } />
            <Styled.Segment active={ isShownPrivateKey } />
          </Styled.LowerProgressBar>
        </Styled.PopUpContent>
      </PopUp>
    </>
  )
}