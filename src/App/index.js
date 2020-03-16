import React from "react";
import * as Styled from "./styled";
import { Header, Footer } from "../shared-components";
import Routes from "./Routing";

function App() {

  return (
    <Styled.App>
      <Header />
      <Styled.Content>
        <Routes />
      </Styled.Content>
      <Footer />
    </Styled.App>
  );
}

export default App;
