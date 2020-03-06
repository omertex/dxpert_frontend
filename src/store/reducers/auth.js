import * as ACTION_TYPES from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  agreedTerms: false,
  password: "",
  keyStoreFileDownloaded: false,
  mnemonics: []
}

const agreeTerms = ( state, action ) => {
  return updateObject( state, { agreedTerms: !state.agreedTerms } );
};

const setPassword = ( state, action ) => {
  return updateObject( state, { password: action.password } )
}

const downloadKeystoreFile = ( state, action ) => {
  return updateObject( state, { keyStoreFileDownloaded: true } )
}

const generateMnemonics = ( state, action ) => {
  return updateObject( state, { mnemonics: action.mnemonics } )
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ACTION_TYPES.AUTH.AGREE_TERMS: return agreeTerms(state, action);
    case ACTION_TYPES.AUTH.SET_PASSWORD: return setPassword(state, action);
    case ACTION_TYPES.AUTH.DOWNLOAD_KEYSTORE_FILE: return downloadKeystoreFile(state, action);
    case ACTION_TYPES.AUTH.GENERATE_MNEMONICS: return generateMnemonics(state, action);
    default:
      return state;
  }
};

export default reducer;