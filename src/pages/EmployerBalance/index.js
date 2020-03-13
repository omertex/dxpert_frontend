import React from 'react';
import * as Styled from './styled';
import ShortInfo from '../../shared-components/ShortInfo';
import { SubmitBtn } from '../../shared-components/Buttons';
import Transaction, { TableHeader } from './Transaction';
import { TRANSACTIONS } from '../../configuration/TemporaryConsts';
import PageName from '../../shared-components/PageName';

const transactions = TRANSACTIONS.map(({ date, id, type, value, status, txFee }) => (
  <Transaction 
    date={date}
    id={id}
    type={type}
    value={value}
    status={status}
    txFee={txFee}
  />
))

export default () => (
  <Styled.Container>
    <ShortInfo />
    <PageName pageName={"Balance"}/>
    <Styled.InfoBlock>

      <Styled.WalletDetails>
        <Styled.Header>Wallet details</Styled.Header>
        <Styled.Details>
          <Styled.Balance>
            <p id="tokens">80 DXP</p>
            <span>Account balance</span>
          </Styled.Balance>
          <Styled.Last>
            <Styled.LastTransaction>
              <p>Last Transaction</p>
              <span>8 DXP</span>
            </Styled.LastTransaction>
            <Styled.Separator />
            <Styled.LastTransaction>
              <p>Since Last Visit</p>
              <span>-13 DXP</span>
            </Styled.LastTransaction>
          </Styled.Last>
          <SubmitBtn text="Buy" />
        </Styled.Details>
      </Styled.WalletDetails>

      <Styled.Transactions>
        <Styled.TransactionsHeader>Transactions</Styled.TransactionsHeader>
        <Styled.TransactionsBlock>
          <TableHeader />
          { transactions }
        </Styled.TransactionsBlock>
      </Styled.Transactions>
    </Styled.InfoBlock>
  </Styled.Container>
)