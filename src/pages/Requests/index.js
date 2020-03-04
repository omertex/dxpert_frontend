import React from 'react';
import * as Styled from './styled';
import ShortInfo from '../../shared-components/ShortInfo';
import Pagination from '../../shared-components/Pagination';
import Request from './Request';

export default () => (
  <Styled.Container>
    <ShortInfo />
    <Styled.PageTitle>My requests</Styled.PageTitle>
    <Styled.Requests>
      <Request 
        walletID="Wallet ID"
        gender="M"
        age="28"
        skills="Adobe Illustrator..."
        status="pending" />
      <Request 
        walletID="Wallet ID"
        gender="M"
        age="28"
        skills="Adobe Illustrator..."
        status="failed" />
      <Request 
        walletID="Wallet ID"
        gender="M"
        age="28"
        skills="Adobe Illustrator..."
        status="completed" />
      <Request 
        walletID="Wallet ID"
        gender="M"
        age="28"
        skills="Adobe Illustrator..."
        status="completed" />
      <Request 
        walletID="Wallet ID"
        gender="M"
        age="28"
        skills="Adobe Illustrator..."
        status="pending" />
    </Styled.Requests>
    <Pagination />
  </Styled.Container>
)