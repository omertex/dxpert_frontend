import { takeEvery } from "redux-saga/effects";

import * as ACTION_TYPES from '../actions/actionTypes';

import {
  getTxsByIdSaga
} from "./requests";
import {
  savePrivateKeySaga,
  generateKeyPairSaga
} from "./auth";

export function* watchRequests() {
  yield takeEvery(ACTION_TYPES.REQUESTS.GET_TXS_BY_ID, getTxsByIdSaga);
}

export function* watchAuth() {
  yield takeEvery(ACTION_TYPES.AUTH.SAVE_PRIVATE_KEY, savePrivateKeySaga);
  yield takeEvery(ACTION_TYPES.AUTH.GENERATE_KEY_PAIR, generateKeyPairSaga)
}