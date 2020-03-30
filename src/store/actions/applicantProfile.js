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
