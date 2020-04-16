import { all, takeEvery, select } from "redux-saga/effects";
import * as ACTION_TYPES from "../actions/actionTypes";
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
  getApplicantProfileSaga,
  applicantProfileWatcher,
} from "./applicantProfileSagas";
import {
  getEmployerProfileSaga,
  employerProfileWatcher,
} from "./employerProfileSagas";

function* getProfile() {
  const auth = yield select((state) => state.auth);
  if (auth.chosenWay === "applicant") {
    yield getApplicantProfileSaga({ payload: auth.address });
  } else {
    yield getEmployerProfileSaga({ payload: auth.address });
  }
}

function* watchAuth() {
  yield takeEvery(ACTION_TYPES.AUTH.CREATE_WALLET_DATA, saveWalletSaga);
  yield takeEvery(
    ACTION_TYPES.AUTH.LOGIN_BY_LOCALSTORAGE,
    loginByLocalStorageSaga
  );
  yield takeEvery(ACTION_TYPES.AUTH.LOGIN_BY_KEYSTORE, loginByKeyStoreSaga);
  yield takeEvery(ACTION_TYPES.AUTH.AUTHORIZE, getProfile);
  yield takeEvery(ACTION_TYPES.AUTH.UPDATE_ACCOUNT_INFO, updateAccountInfoSaga);
  yield takeEvery(ACTION_TYPES.AUTH.LOG_OUT, logoutSaga);
}

export function* rootSaga() {
  yield all([
    watchAuth(),
    getAuthTokenWatcher(),
    getCountriesWatcher(),
    getCitiesWatcher(),
    applicantProfileWatcher(),
    employerProfileWatcher(),
  ]);
}
