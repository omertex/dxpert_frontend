import {
  getEmployerProfile,
  setEmployerProfile,
  updateEmployerProfile,
} from "./requests";
import { takeLatest, put, select } from "redux-saga/effects";
import { EMPLOYER_PROFILE } from "../actions/actionTypes";

const emptyProfile = {
  organisation: "",
  email: "",
  country: "",
  city: "",
  website: "",
  about: "",
  // avatar: "",
};

function* getEmployerProfileSaga(action) {
  const response = yield getEmployerProfile(action.payload);
  if (!response) {
    // установить профиль (только для новых профилей)
    yield setEmployerProfile({
      ...emptyProfile,
      address: action.payload,
    });
  }
  // clean unused/wrong property
  delete response.__typename;
  yield put({
    type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS,
    payload: response,
  });
}

export function* getEmployerProfileWatcher() {
  yield takeLatest(
    EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE,
    getEmployerProfileSaga
  );
}

function* updateEmployerProfileSaga(action) {
  const address = yield select((state) => state.auth.address);
  const data = { ...action.payload, address };
  updateEmployerProfile(data);
  yield put({
    type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS,
    payload: action.payload,
  });
}

export function* updateEmployerProfileWatcher() {
  yield takeLatest(
    EMPLOYER_PROFILE.UPDATE_EMPLOYER_PROFILE,
    updateEmployerProfileSaga
  );
}
