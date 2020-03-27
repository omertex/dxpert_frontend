import * as ACTION_TYPES from "./actionTypes";

export const agreeTerms = () => {
  return {
    type: ACTION_TYPES.AUTH.AGREE_TERMS,
  };
};

export const setPassword = (password) => {
  return {
    type: ACTION_TYPES.AUTH.SET_PASSWORD,
    password,
  };
};

export const downloadKeystoreFile = () => {
  return {
    type: ACTION_TYPES.AUTH.DOWNLOAD_KEYSTORE_FILE,
  };
};

export const generateMnemonics = (mnemonics) => {
  return {
    type: ACTION_TYPES.AUTH.GENERATE_MNEMONICS,
    mnemonics,
  };
};

export const selectMnemonicsToCheck = (mnemonics) => {
  return {
    type: ACTION_TYPES.AUTH.SELECT_MNEMONICS_TO_CHECK,
    mnemonics,
  };
};

export const authorize = () => {
  return {
    type: ACTION_TYPES.AUTH.AUTHORIZE,
  };
};

export const createNewWallet = () => {
  return {
    type: ACTION_TYPES.AUTH.CREATE_NEW_WALLET,
  };
};

export const generatePublicKey = (publicKey) => {
  return {
    type: ACTION_TYPES.AUTH.GENERATE_PUBLIC_KEY,
    publicKey,
  };
};

export const chooseWay = (way) => {
  return {
    type: ACTION_TYPES.AUTH.CHOOSE_WAY,
    way,
  };
};

export const constructMnemonicPhrase = (phrase) => {
  return {
    type: ACTION_TYPES.AUTH.CONSTRUCT_MNEMONIC_PHRASE,
    phrase,
  };
};

export const savePrivateKey = (key) => {
  return {
    type: ACTION_TYPES.AUTH.SAVE_PRIVATE_KEY,
    key,
  };
};

export const saveAddress = (address) => {
  return {
    type: ACTION_TYPES.AUTH.SAVE_ADDRESS,
    address,
  };
};

export const createWalletData = (wallet) => {
  return {
    type: ACTION_TYPES.AUTH.CREATE_WALLET_DATA,
    wallet,
  };
};
