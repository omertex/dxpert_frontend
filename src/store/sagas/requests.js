import { put } from "redux-saga/effects";
import axios from "axios";

import * as ACTIONS from "../actions";

export function* getTxsByIdSaga(action) {
  console.log(action.txType, action.senderAddress);
  const response = yield axios.get(
    `/txs?message.action=${action.txType}&message.sender=${action.senderAddress}`
  );
  console.log("response is: ", response.data.txs);
  yield put(ACTIONS.setTxs(response.data.txs));
}
