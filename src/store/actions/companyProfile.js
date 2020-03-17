import * as ACTION_TYPES from "./actionTypes";

export const setProfileInfo = info => {
  return {
    type: ACTION_TYPES.COMPANY_PROFILE.SET_PROFILE_INFO,
    payload: info
  };
};
