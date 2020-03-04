import React from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import {
  CreateWallet,
  ChooseWay,
  WalletCreationTutorial,
  UnlockWallet,
  Profile } from '../pages';
import SearchFilter from '../pages/SearchFilter';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Styled.App>
      <Header />
      <Styled.Content>
        <Switch>
          <Route exact path="/" component={ ChooseWay } /> 
          <Route path="/search-filter" component={ SearchFilter } />
          <Route exact path="/" component={ChooseWay} />
          <Route
            path="/wallet-creation-tutorial"
            component={WalletCreationTutorial}
          />
          <Route path="/create-wallet" component={CreateWallet} />
          <Route path="/unlock-wallet" component={UnlockWallet} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Styled.Content>
      <Footer />
    </Styled.App>
  );
}

export default App;
