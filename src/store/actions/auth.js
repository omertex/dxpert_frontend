import * as ACTION_TYPES from './actionTypes';

export const agreeTerms = () => {
  return {
    type: ACTION_TYPES.AUTH.AGREE_TERMS
  }
}

export const setPassword = password => {
  return {
    type: ACTION_TYPES.AUTH.SET_PASSWORD,
    password
  }
}

export const downloadKeystoreFile = () => {
  return {
    type: ACTION_TYPES.AUTH.DOWNLOAD_KEYSTORE_FILE
  }
}

export const generateMnemonics = mnemonics => {
  return {
    type: ACTION_TYPES.AUTH.GENERATE_MNEMONICS,
    mnemonics
  }
}