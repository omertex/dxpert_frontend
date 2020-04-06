import { all, takeEvery } from "redux-saga/effects";
import * as ACTION_TYPES from "../actions/actionTypes";
import { getTxsByIdSaga } from "./requests";
import {
  saveWalletSaga,
  loginByLocalStorageSaga,
  loginByKeyStoreSaga,
  updateAccountInfoSaga,
  logoutSaga,
} from "./auth";
import {
  getAuthTokenWatcher,
  getCountriesWatcher,
  getCitiesWatcher,
} from "./serviceDataSagas";
import {
  getApplicantProfileWatcher,
  sendApplicantProfileWatcher,
} from "./applicantProfileSagas";

function* watchRequests() {
  yield takeEvery(ACTION_TYPES.REQUESTS.GET_TXS, getTxsByIdSaga);
}

function* watchAuth() {
  yield takeEvery(ACTION_TYPES.AUTH.CREATE_WALLET_DATA, saveWalletSaga);
  yield takeEvery(
    ACTION_TYPES.AUTH.LOGIN_BY_LOCALSTORAGE,
    loginByLocalStorageSaga
  );
  yield takeEvery(ACTION_TYPES.AUTH.LOGIN_BY_KEYSTORE, loginByKeyStoreSaga);
  yield takeEvery(ACTION_TYPES.AUTH.UPDATE_ACCOUNT_INFO, updateAccountInfoSaga);
  yield takeEvery(ACTION_TYPES.AUTH.LOG_OUT, logoutSaga);
}

export function* rootSaga() {
  yield all([
    watchRequests(),
    watchAuth(),
    getAuthTokenWatcher(),
    getCountriesWatcher(),
    getCitiesWatcher(),
    getApplicantProfileWatcher(),
    sendApplicantProfileWatcher(),
  ]);
}
