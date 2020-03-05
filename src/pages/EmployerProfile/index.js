import React from 'react';
import * as Styled from './styled';
import ShortInfo from '../../shared-components/ShortInfo';
import ContactDetails from './ContactDetails';
import PageName from '../../shared-components/PageName';

export default () => (
  <Styled.Container>
    <ShortInfo needWalletInfo/>
    <PageName pageName={"My profile"}/>
    <ContactDetails />
  </Styled.Container>
);