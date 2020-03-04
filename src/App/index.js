import React from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import {
  CreateWallet,
  ChooseWay,
  WalletCreationTutorial,
<<<<<<< HEAD
  UnlockWallet } from '../pages';
import SearchFilter from '../pages/SearchFilter';
import { Switch, Route } from 'react-router-dom';
=======
  Profile,
  UnlockWallet
} from "../pages";
import TestPage from "../pages/testPage";
import { Switch, Route } from "react-router-dom";
>>>>>>> development

function App() {
  return (
    <Styled.App>
      <Header />
      <Styled.Content>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={ ChooseWay } /> 
          <Route path="/wallet-creation-tutorial" component={ WalletCreationTutorial } />
          <Route path="/create-wallet" component={ CreateWallet } />
          <Route path="/unlock-wallet" component={ UnlockWallet } />
          <Route path="/search-filter" component={ SearchFilter } />
=======
          <Route exact path="/" component={ChooseWay} />
          <Route
            path="/wallet-creation-tutorial"
            component={WalletCreationTutorial}
          />
          <Route path="/create-wallet" component={CreateWallet} />
          <Route path="/unlock-wallet" component={UnlockWallet} />
          <Route path="/test" component={TestPage} />
          <Route path="/profile" component={Profile} />
>>>>>>> development
        </Switch>
      </Styled.Content>
      <Footer />
    </Styled.App>
  );
}

export default App;
