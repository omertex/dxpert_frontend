import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import { SubmitBtn } from "../../shared-components/Buttons";
import Transaction, { TableHeader } from "./Transaction";
import PageName from "../../shared-components/PageName";
import { getAllTransactions, fillUpBalance } from "../../store/sagas/requests";
import { TemporaryBankWallet } from "../../configuration/BackendConsts";
import { connect } from "react-redux";
import * as ACTIONS from "../../store/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

export const EmployerBalance = ({ address, coins, saveCoins }) => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [purchasesLoading, setPurchasesLoading] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(true);

  const getTransactionsCost = (x) => {
    switch (x.tx.value.msg[0].type) {
      case "cosmos-sdk/MsgSend":
        return `${x.tx.value.msg[0].value.amount[0].amount} DXP`;
      case "dxpert/RequestResume":
        return `${x.tx.value.msg[0].value.offer[0].amount} DXP`;
      default:
        return "-";
    }
  };

  useEffect(() => {
    getAllTransactions(address)
      .then((response) => {
        return response.sort((a, b) => {
          const keyA = new Date(a.timestamp);
          const keyB = new Date(b.timestamp);
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });
      })
      .then((response) => {
        setAllTransactions(
          response.map((x) => (
            <Transaction
              date={x.timestamp}
              id={x.txhash}
              type={x.tx.value.msg[0].type}
              txFee={x.tx.value.fee.gas}
              value={getTransactionsCost(x)}
              key={x.timestamp}
            />
          ))
        );
        setBalanceLoading(false);
      });
  }, []);

  const ByDXP = () => {
    setPurchasesLoading(true);
    fillUpBalance(address).then((result) => {
      setPurchasesLoading(false);
      saveCoins(result);
    });
  };

  return (
    <Styled.Container>
      <ShortInfo />
      <PageName pageName={"Balance"} />
      {balanceLoading ? (
        <CircularProgress />
      ) : (
        <Styled.InfoBlock>
          <Styled.WalletDetails>
            <Styled.Header>Wallet details</Styled.Header>
            <Styled.Details>
              <Styled.Balance>
                <p id="tokens">{coins} DXP</p>
                <span>Account balance</span>
              </Styled.Balance>
              <Styled.Last>
                <Styled.LastTransaction>
                  <p>Last Transaction</p>
                  <span>
                    {allTransactions.length
                      ? allTransactions[0].props.value
                      : "-"}
                  </span>
                </Styled.LastTransaction>
                {/*<Styled.Separator />*/}
                {/*<Styled.LastTransaction>*/}
                {/*  <p>Since Last Visit</p>*/}
                {/*  <span>-13 DXP</span>*/}
                {/*</Styled.LastTransaction>*/}
              </Styled.Last>
              <SubmitBtn
                disabled={
                  purchasesLoading || address === TemporaryBankWallet.address
                }
                text="Buy 10 DXP"
                clicked={ByDXP}
              />
            </Styled.Details>
          </Styled.WalletDetails>

          <Styled.Transactions>
            <Styled.TransactionsHeader>Transactions</Styled.TransactionsHeader>
            <Styled.TransactionsBlock>
              <TableHeader />
              {allTransactions}
            </Styled.TransactionsBlock>
          </Styled.Transactions>
        </Styled.InfoBlock>
      )}
    </Styled.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    account_number: state.auth.account_number,
    sequence: state.auth.sequence,
    coins: state.auth.coins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCoins: (coins) => dispatch(ACTIONS.saveCoins(coins)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerBalance);
