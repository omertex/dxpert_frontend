import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  request: {},
};

const setTxs = (state, action) => {
  return updateObject(state, { request: action.payload });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUESTS.SET_TXS:
      return setTxs(state, action);
    default:
      return state;
  }
};

export default reducer;
