import { takeEvery } from "redux-saga/effects";

import * as ACTION_TYPES from '../actions/actionTypes';

import {
  getTxsByIdSaga
} from "./requests";

export function* watchGetTxsById() {
  yield takeEvery(ACTION_TYPES.REQUESTS.GET_TXS_BY_ID, getTxsByIdSaga);
}