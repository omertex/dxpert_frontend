import * as ACTION_TYPES from './actionTypes';

export const getTxs = ( txType, senderAddress ) => {
  return {
    type: ACTION_TYPES.REQUESTS.GET_TXS,
    txType,
    senderAddress
  }
}

export const setTxs = payload => {
  return {
    type:ACTION_TYPES.REQUESTS.SET_TXS,
    payload
  }
}