import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  company: "",
  email: "",
  country: "",
  city: "",
  website: "",
  aboutCompany: "",
};

const cleanProfile = (state, action) => {
  return updateObject(state, {
    company: "",
    email: "",
    country: "",
    city: "",
    website: "",
    aboutCompany: "",
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.COMPANY_PROFILE.SET_PROFILE_INFO:
      return action.payload;
    case ACTION_TYPES.COMPANY_PROFILE.CLEAN_EMPLOYER_PROFILE:
      return cleanProfile(state, action);
    default:
      return state;
  }
};

export default reducer;
