import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  isAuth: false,
  agreedTerms: false,
  password: "",
  keyStoreFileDownloaded: false,
  mnemonics: [],
  selectedMnemonics: [],
  publicKey: ""
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
    selectedMnemonics: []
  });
};

const generatePublicKey = (state, action) => {
  return updateObject(state, { publicKey: action.publicKey });
}

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
    case ACTION_TYPES.AUTH.SELECT_MNEMONICS_TO_CHECK:
      return selectMnemonicsToCheck(state, action);
    case ACTION_TYPES.AUTH.AUTHORIZE:
      return authorize(state, action);
    case ACTION_TYPES.AUTH.CREATE_NEW_WALLET:
      return createNewWallet(state, action);
    case ACTION_TYPES.AUTH.GENERATE_PUBLIC_KEY:
      return generatePublicKey(state, action);
    default:
      return state;
  }
};

export default reducer;
