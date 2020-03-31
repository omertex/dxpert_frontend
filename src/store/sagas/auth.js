import { put } from "redux-saga/effects";
import * as ACTIONS from "../actions";
import { arrayBufferToBase64 } from "../../configuration/helpers";

export function* saveWalletSaga(action) {
  const { privateKey, publicKey, address } = action.wallet;
  const convertPrivateKey = arrayBufferToBase64(privateKey);
  const convertPublicKey = arrayBufferToBase64(publicKey);

  yield localStorage.setItem("dxpert_private_key", convertPrivateKey);
  yield localStorage.setItem("dxpert_public_key", convertPublicKey);
  yield localStorage.setItem("dxpert_address", address);
  yield put(ACTIONS.generatePublicKey(convertPublicKey));
  yield put(ACTIONS.savePrivateKey(convertPrivateKey));
  yield put(ACTIONS.saveAddress(address));
}

export function* updateKeyPairSaga(action) {
  const { privateKey, publicKey, address } = action.wallet;

  yield put(ACTIONS.generatePublicKey(publicKey));
  yield put(ACTIONS.savePrivateKey(privateKey));
  yield put(ACTIONS.saveAddress(address));
}

export function* updateAccountInfoSaga(action) {
  const { account_number, sequence, coins } = action.info;

  yield put(ACTIONS.saveAccountNumber(account_number));
  yield put(ACTIONS.saveSequence(sequence));
  yield put(ACTIONS.saveCoins(coins));
}
