import * as ACTION_TYPES from "./actionTypes";

export const setProfileInfo = (info) => {
  return {
    type: ACTION_TYPES.COMPANY_PROFILE.SET_PROFILE_INFO,
    payload: info,
  };
};

export const cleanEmployerProfile = () => ({
  type: ACTION_TYPES.COMPANY_PROFILE.CLEAN_EMPLOYER_PROFILE,
});
