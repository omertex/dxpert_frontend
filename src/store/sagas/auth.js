import { put } from "redux-saga/effects";

import * as ACTIONS from "../actions";

export function* savePrivateKeySaga(action) {
  console.log(action);
  yield localStorage.setItem("DXpert_private_key", action.key);
  yield put(ACTIONS.savePrivateKey);
}