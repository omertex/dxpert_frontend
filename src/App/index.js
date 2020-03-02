import React from 'react';
import * as Styled from './styled';
import { Header, Footer } from '../shared-components';
import { CreateWallet } from '../pages';

function App() {
  return (
    <Styled.App>
      <Header />
      <Styled.Content>
        <CreateWallet />
      </Styled.Content>
      <Footer />
    </Styled.App>
  );
}

export default App;
