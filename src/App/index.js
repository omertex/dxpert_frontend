import React from 'react';
import * as Styled from './styled';
import { Header, Footer } from '../shared-components';
import { 
  CreateWallet,
  ChooseWay,
  WalletCreationTutorial } from '../pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Styled.App>
      <Header />
      <Styled.Content>
        <Switch>
          <Route exact path="/" component={ ChooseWay } /> 
          <Route path="/wallet-creation-tutorial" component={ WalletCreationTutorial } />
          <Route path="/create-wallet" component={ CreateWallet } />
        </Switch>
      </Styled.Content>
      <Footer />
    </Styled.App>
  );
}

export default App;
