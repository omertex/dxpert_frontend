import { put } from "redux-saga/effects";
import axios from "axios";

import * as ACTIONS from "../actions";

export function* getTxsByIdSaga(action) {
  const response = yield axios.get(
    `http://192.168.1.207/txs/77FA154DCDF0CB5C86935E2B6C04187D653DFB3447B1595B2D6EBF5882CFECB3`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  console.log("response is: ", response);
  yield put(ACTIONS.setTxs(response.data));
}
