import React from "react";
import * as Styled from "./styled";

export default ({ date, id, type, value, status, txFee }) => (
  <Styled.Transaction status={status}>
    <p id="date">{new Date(date).toLocaleDateString()}</p>
    <p id="id">{`${id.slice(0, 28)}...`}</p>
    <p id="type">{type.split("/")[1]}</p>
    <p id="value">{value}</p>
    {/*<p id="status">{status}</p>*/}
    <p id="txFee">{txFee}</p>
  </Styled.Transaction>
);

export const TableHeader = () => (
  <Styled.Header>
    <p id="date">Date</p>
    <p id="id">Transaction ID</p>
    <p id="type">Type</p>
    <p id="value">Value</p>
    {/*<p id="status">Status</p>*/}
    <p id="txFee">TxFee</p>
  </Styled.Header>
);
