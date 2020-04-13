import * as ACTION_TYPES from "./actionTypes";

export const setAboutMe = (aboutMe) => {
  return {
    type: ACTION_TYPES.APPLICANT_PROFILE.SET_ABOUT_ME,
    payload: aboutMe,
  };
};

export const setContacts = (contactInfo) => {
  return {
    type: ACTION_TYPES.APPLICANT_PROFILE.SET_CONTACTS,
    payload: contactInfo,
  };
};

export const setWorkExperience = (experience) => {
  return {
    type: ACTION_TYPES.APPLICANT_PROFILE.SET_WORK_EXPERIENCE,
    payload: experience,
  };
};

export const setEducation = (education) => {
  return {
    type: ACTION_TYPES.APPLICANT_PROFILE.SET_EDUCATION,
    payload: education,
  };
};

export const setSkills = (skills) => {
  return {
    type: ACTION_TYPES.APPLICANT_PROFILE.SET_SKILLS,
    payload: skills,
  };
};

export const setLanguages = (languages) => {
  return {
    type: ACTION_TYPES.APPLICANT_PROFILE.SET_LANGUAGES,
    payload: languages,
  };
};

export const getApplicantProfile = (address) => ({
  type: ACTION_TYPES.APPLICANT_PROFILE.GET_APPLICANT_PROFILE,
  payload: address,
});

export const setDetails = (details) => ({
  type: ACTION_TYPES.APPLICANT_PROFILE.SET_DETAILS,
  payload: details,
});

export const sendApplicantProfile = () => ({
  type: ACTION_TYPES.APPLICANT_PROFILE.SEND_APPLICANT_PROFILE,
});

export const cleanApplicantProfile = () => ({
  type: ACTION_TYPES.APPLICANT_PROFILE.CLEAN_APPLICANT_PROFILE,
});
