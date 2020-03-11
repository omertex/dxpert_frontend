import { takeEvery } from "redux-saga/effects";

import * as ACTION_TYPES from '../actions/actionTypes';

import {
  getTxsByIdSaga
} from "./requests";
import {
  savePrivateKeySaga
} from "./auth";

export function* watchRequests() {
  yield takeEvery(ACTION_TYPES.REQUESTS.GET_TXS_BY_ID, getTxsByIdSaga);
}

export function* watchAuth() {
  yield takeEvery(ACTION_TYPES.AUTH.SAVE_PRIVATE_KEY, savePrivateKeySaga);
}