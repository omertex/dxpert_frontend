import * as ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  company: "",
  email: "",
  country: "",
  city: "",
  website: "",
  aboutCompany: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.COMPANY_PROFILE.SET_PROFILE_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
