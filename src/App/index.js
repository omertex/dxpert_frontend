import React, { useState } from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import {
  CreateWallet,
  ChooseWay,
  WalletCreationTutorial,
  UnlockWallet,
  Profile,
  EmployerBalance,
  EmployerRequests,
  EmployerProfile
} from "../pages";
import SearchFilter from "../pages/SearchFilter";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routing";

function App() {
  const [chosenWay, setChosenWay] = useState("employer");

  return (
    <Styled.App>
      <Header chosenWay={chosenWay} />
      <Styled.Content>
        <Routes />
        {/* <Switch>
          <Route exact path="/" component={ChooseWay} />
          <Route path="/employer/search-filter" component={SearchFilter} />
          <Route
            path="/wallet-creation-tutorial"
            component={WalletCreationTutorial}
          />
          <Route path="/create-wallet" component={CreateWallet} />
          <Route path="/unlock-wallet" component={UnlockWallet} />
          <Route path="/applicant/profile" component={Profile} />
          <Route path="/employer/balance" component={EmployerBalance} />
          <Route path="/employer/my-requests" component={EmployerRequests} />
          <Route path="/employer/profile" component={EmployerProfile} />
        </Switch> */}
      </Styled.Content>
      <Footer />
    </Styled.App>
  );
}

export default App;
