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
  photo: "",
};

export function* getEmployerProfileSaga({ payload }) {
  const response = yield getEmployerProfile(payload);
  if (!response) {
    // установить профиль (только для новых профилей)
    yield setEmployerProfile({
      ...emptyProfile,
      address: payload,
    });
    const response2 = yield getEmployerProfile(payload);
    // clean unused/wrong property
    delete response2.__typename;
    yield put({
      type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS,
      payload: response2,
    });
  } else {
    // clean unused/wrong property
    delete response.__typename;
    yield put({
      type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS,
      payload: response,
    });
  }
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

export function* employerProfileWatcher() {
  yield takeLatest(
    EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE,
    getEmployerProfileSaga
  );
  yield takeLatest(
    EMPLOYER_PROFILE.UPDATE_EMPLOYER_PROFILE,
    updateEmployerProfileSaga
  );
}
