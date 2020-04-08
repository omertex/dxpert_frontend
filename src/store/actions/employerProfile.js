import { EMPLOYER_PROFILE } from "./actionTypes";

export const getEmployerProfile = () => ({
  type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE,
});

export const getEmployerProfileSuccess = (payload) => ({
  type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS,
  payload,
});

export const cleanEmployerProfile = () => ({
  type: EMPLOYER_PROFILE.CLEAN_EMPLOYER_PROFILE,
});
