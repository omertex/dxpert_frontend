import { put } from "redux-saga/effects";

import * as ACTIONS from "../actions";
import { generatePublicKey } from "../../configuration/helpers";

export function* savePrivateKeySaga(action) {
  console.log(action);
  yield localStorage.setItem("DXpert_private_key", action.key);
  yield put(ACTIONS.savePrivateKey);
}

export function* generateKeyPairSaga(action) {
  const { privateKey, publicKey } = generatePublicKey(action.phrase);

  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(privateKey))
  );
  element.setAttribute("download", "keystore.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  yield put(ACTIONS.generatePublicKey(publicKey));
  yield put(ACTIONS.savePrivateKey(privateKey));
  yield put(ACTIONS.downloadKeystoreFile())
}