import * as ACTION_TYPES from './actionTypes';

export const getTxsById = id => {
  return {
    type: ACTION_TYPES.REQUESTS.GET_TXS_BY_ID
  }
}

export const setTxs = payload => {
  return {
    type:ACTION_TYPES.REQUESTS.SET_TXS,
    payload
  }
}