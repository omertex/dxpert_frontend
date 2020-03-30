import { takeEvery } from "redux-saga/effects";
import * as ACTION_TYPES from "../actions/actionTypes";
import { getTxsByIdSaga } from "./requests";
import { saveWalletSaga } from "./auth";

export function* watchRequests() {
  yield takeEvery(ACTION_TYPES.REQUESTS.GET_TXS, getTxsByIdSaga);
}

export function* watchAuth() {
  yield takeEvery(ACTION_TYPES.AUTH.CREATE_WALLET_DATA, saveWalletSaga);
}
