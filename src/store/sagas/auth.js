import { put } from "redux-saga/effects";
import * as ACTIONS from "../actions";
import {
  arrayBufferToBase64,
  base64Decryption,
  generateWalletByPrivateKey,
} from "../../configuration/helpers";
import { getAccountRole, getAccountInfo } from "../sagas/requests";

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

export function* loginByLocalStorageSaga(action) {
  const { privateKey, publicKey, address } = action.wallet;
  const chosenWay = yield getAccountRole(address);
  const accountInfo = yield getAccountInfo(address);

  yield put(ACTIONS.generatePublicKey(publicKey));
  yield put(ACTIONS.savePrivateKey(privateKey));
  yield put(ACTIONS.saveAddress(address));
  yield put(ACTIONS.chooseWay(chosenWay === 0 ? "applicant" : "employer"));
  yield put(ACTIONS.updateAccountInfo(accountInfo));
  yield put(ACTIONS.authorize());
}

export function* loginByKeyStoreSaga(action) {
  const { encryptedString, password } = action.keystore;
  const privateKey = yield base64Decryption(encryptedString, password);
  const wallet = generateWalletByPrivateKey(privateKey);
  const chosenWay = yield getAccountRole(wallet.address);
  const accountInfo = yield getAccountInfo(wallet.address);

  yield put(ACTIONS.chooseWay(chosenWay === 0 ? "applicant" : "employer"));
  yield put(ACTIONS.createWalletData(wallet));
  yield put(ACTIONS.updateAccountInfo(accountInfo));
  yield put(ACTIONS.setPassword(password));
  yield put(ACTIONS.authorize());
}

export function* updateAccountInfoSaga(action) {
  const { account_number, sequence, coins } = action.info;

  yield put(ACTIONS.saveAccountNumber(account_number));
  yield put(ACTIONS.saveSequence(sequence));
  yield put(ACTIONS.saveCoins(coins));
}

export function* logoutSaga() {
  localStorage.removeItem("dxpert_private_key");
  localStorage.removeItem("dxpert_public_key");
  localStorage.removeItem("dxpert_address");
  yield put(ACTIONS.createNewWallet());
  yield put(ACTIONS.cleanApplicantProfile());
  yield put(ACTIONS.cleanEmployerProfile());
}
