import { EMPLOYER_PROFILE } from "./actionTypes";

export const getEmployerProfile = (address) => ({
  type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE,
  payload: address,
});

export const getEmployerProfileSuccess = (payload) => ({
  type: EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS,
  payload,
});

export const cleanEmployerProfile = () => ({
  type: EMPLOYER_PROFILE.CLEAN_EMPLOYER_PROFILE,
});

// update employer's profile
export const updateEmployerProfile = (employerProfile) => ({
  type: EMPLOYER_PROFILE.UPDATE_EMPLOYER_PROFILE,
  payload: employerProfile,
});
