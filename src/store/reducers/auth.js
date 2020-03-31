import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  isAuth: false,
  agreedTerms: false,
  password: "",
  keyStoreFileDownloaded: false,
  mnemonics: [],
  mnemonicPhrase: "",
  selectedMnemonics: [],
  publicKey: "",
  chosenWay: "applicant",
  privateKeySaved: false,
  privateKey: "",
  address: "",
  account_number: 0,
  sequence: 0,
  coins: 0,
};

const agreeTerms = (state, action) => {
  return updateObject(state, { agreedTerms: !state.agreedTerms });
};

const setPassword = (state, action) => {
  return updateObject(state, { password: action.password });
};

const downloadKeystoreFile = (state, action) => {
  return updateObject(state, { keyStoreFileDownloaded: true });
};

const generateMnemonics = (state, action) => {
  return updateObject(state, { mnemonics: action.mnemonics });
};

const constructMnemonicPhrase = (state, action) => {
  return updateObject(state, { mnemonicPhrase: action.phrase });
};

const selectMnemonicsToCheck = (state, action) => {
  return updateObject(state, { selectedMnemonics: action.mnemonics });
};

const authorize = (state, action) => {
  return updateObject(state, { isAuth: true });
};

const createNewWallet = (state, action) => {
  return updateObject(state, {
    isAuth: false,
    agreedTerms: false,
    password: "",
    keyStoreFileDownloaded: false,
    mnemonics: [],
    mnemonicPhrase: "",
    selectedMnemonics: [],
    publicKey: "",
    privateKeySaved: false,
    privateKey: "",
    address: "",
    account_number: 0,
    sequence: 0,
    coins: 0,
  });
};

const chooseWay = (state, action) => {
  return updateObject(state, { chosenWay: action.way });
};

const generatePublicKey = (state, action) => {
  return updateObject(state, { publicKey: action.publicKey });
};

const savePrivateKey = (state, action) => {
  return updateObject(state, { privateKeySaved: true, privateKey: action.key });
};

const saveAddress = (state, action) => {
  return updateObject(state, { address: action.address });
};

const setAccountNumber = (state, action) => {
  return updateObject(state, { account_number: action.account_number });
};

const setSequence = (state, action) => {
  return updateObject(state, { sequence: action.sequence });
};

const setCoins = (state, action) => {
  return updateObject(state, { coins: action.coins });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH.AGREE_TERMS:
      return agreeTerms(state, action);
    case ACTION_TYPES.AUTH.SET_PASSWORD:
      return setPassword(state, action);
    case ACTION_TYPES.AUTH.DOWNLOAD_KEYSTORE_FILE:
      return downloadKeystoreFile(state, action);
    case ACTION_TYPES.AUTH.GENERATE_MNEMONICS:
      return generateMnemonics(state, action);
    case ACTION_TYPES.AUTH.CONSTRUCT_MNEMONIC_PHRASE:
      return constructMnemonicPhrase(state, action);
    case ACTION_TYPES.AUTH.SELECT_MNEMONICS_TO_CHECK:
      return selectMnemonicsToCheck(state, action);
    case ACTION_TYPES.AUTH.AUTHORIZE:
      return authorize(state, action);
    case ACTION_TYPES.AUTH.CREATE_NEW_WALLET:
      return createNewWallet(state, action);
    case ACTION_TYPES.AUTH.GENERATE_PUBLIC_KEY:
      return generatePublicKey(state, action);
    case ACTION_TYPES.AUTH.CHOOSE_WAY:
      return chooseWay(state, action);
    case ACTION_TYPES.AUTH.SAVE_PRIVATE_KEY:
      return savePrivateKey(state, action);
    case ACTION_TYPES.AUTH.SAVE_ADDRESS:
      return saveAddress(state, action);
    case ACTION_TYPES.AUTH.SET_ACCOUNT_NUMBER:
      return setAccountNumber(state, action);
    case ACTION_TYPES.AUTH.SET_SEQUENCE:
      return setSequence(state, action);
    case ACTION_TYPES.AUTH.SET_COINS:
      return setCoins(state, action);
    default:
      return state;
  }
};

export default reducer;
