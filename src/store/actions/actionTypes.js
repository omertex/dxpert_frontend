export const AUTH = {
  AUTHORIZE: "AUTHORIZE",
  AGREE_TERMS: "AGREE_TERMS",
  SET_PASSWORD: "SET_PASSWORD",
  DOWNLOAD_KEYSTORE_FILE: "DOWNLOAD_KEYSTORE_FILE",
  GENERATE_MNEMONICS: "GENERATE_MNEMONICS",
  SELECT_MNEMONICS_TO_CHECK: "SELECT_MNEMONICS_TO_CHECK",
  CONSTRUCT_MNEMONIC_PHRASE: "CONSTRUCT_MNEMONIC_PHRASE",
  CREATE_NEW_WALLET: "CREATE_NEW_WALLET",
  GENERATE_PUBLIC_KEY: "GENERATE_PUBLIC_KEY",
  CHOOSE_WAY: "CHOOSE_WAY",
  SAVE_PRIVATE_KEY: "SAVE_PRIVATE_KEY",
  SAVE_ADDRESS: "SAVE_ADDRESS",
  CREATE_WALLET_DATA: "CREATE_WALLET_DATA",
  LOGIN_BY_LOCALSTORAGE: "LOGIN_BY_LOCALSTORAGE",
  LOGIN_BY_KEYSTORE: "LOGIN_BY_KEYSTORE",
  LOG_OUT: "LOG_OUT",
  UPDATE_ACCOUNT_INFO: "UPDATE_ACCOUNT_INFO",
  SET_ACCOUNT_NUMBER: "SET_ACCOUNT_NUMBER",
  SET_SEQUENCE: "SET_SEQUENCE",
  SET_COINS: "SET_COINS",
  SET_TRANSACTION_INFO: "SET_TRANSACTION_INFO",
};

export const REQUESTS = {
  GET_TXS: "GET_TXS",
  SET_TXS: "SET_TXS",
};

export const APPLICANT_PROFILE = {
  SET_ABOUT_ME: "SET_ABOUT_ME",
  SET_CONTACTS: "SET_CONTACTS",
  SET_WORK_EXPERIENCE: "SET_WORK_EXPERIENCE",
  SET_EDUCATION: "SET_EDUCATION",
  SET_SKILLS: "SET_SKILLS",
  SET_LANGUAGES: "SET_LANGUAGES",
  // saga actions
  GET_APPLICANT_PROFILE: "GET_APPLICANT_PROFILE",
  SEND_APPLICANT_PROFILE: "SEND_APPLICANT_PROFILE",
  // store actions
  SET_PROFILE: "SET_PROFILE",
  SET_IS_PROFILE_LOADED: "SET_IS_PROFILE_LOADED",
  SET_DETAILS: "SET_DETAILS",
  CLEAN_APPLICANT_PROFILE: "CLEAN_APPLICANT_PROFILE",
};

export const EMPLOYER_PROFILE = {
  GET_EMPLOYER_PROFILE: "GET_EMPLOYER_PROFILE",
  GET_EMPLOYER_PROFILE_SUCCESS: "GET_EMPLOYER_PROFILE_SUCCESS",
  UPDATE_EMPLOYER_PROFILE: "UPDATE_EMPLOYER_PROFILE",
  CLEAN_EMPLOYER_PROFILE: "CLEAN_EMPLOYER_PROFILE",
};

export const SERVICE_DATA = {
  // saga actions
  GET_AUTH_TOKEN: "GET_AUTH_TOKEN",
  GET_COUNTRIES_LIST: "GET_COUNTRIES_LIST",
  GET_CITIES_LIST: "GET_CITIES_LIST",
  // store actions
  SET_AUTH_TOKEN: "SET_AUTH_TOKEN",
  SET_COUNTRIES_LIST: "SET_COUNTRIES_LIST",
  SET_CITIES_LIST: "SET_CITIES_LIST",
};
