import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  details: {
    avatar: "",
    name: "",
  },
  aboutMe: "",
  contacts: {
    country: "",
    city: "",
    sex: "",
    DOB: "",
    email: "",
  },
  workExperience: [],
  education: [],
  skills: [],
  languages: [],
  isApplicantProfileLoaded: false,
};

const setAboutMe = (state, action) => {
  return updateObject(state, { aboutMe: action.payload });
};

const setContacts = (state, action) => {
  return updateObject(state, { contacts: action.payload });
};

const setWorkExperience = (state, action) => {
  return updateObject(state, { workExperience: action.payload });
};

const setEducation = (state, action) => {
  return updateObject(state, { education: action.payload });
};

const setSkills = (state, action) => {
  return updateObject(state, { skills: action.payload });
};

const setLanguages = (state, action) => {
  return updateObject(state, { languages: action.payload });
};

const cleanProfile = (state, action) => {
  return updateObject(state, {
    details: {
      avatar: "",
      name: "",
    },
    aboutMe: "",
    contacts: {
      country: "",
      city: "",
      sex: "",
      DOB: "",
      email: "",
    },
    workExperience: [],
    education: [],
    skills: [],
    languages: [],
    isApplicantProfileLoaded: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.APPLICANT_PROFILE.SET_ABOUT_ME:
      return setAboutMe(state, action);
    case ACTION_TYPES.APPLICANT_PROFILE.SET_CONTACTS:
      return setContacts(state, action);
    case ACTION_TYPES.APPLICANT_PROFILE.SET_WORK_EXPERIENCE:
      return setWorkExperience(state, action);
    case ACTION_TYPES.APPLICANT_PROFILE.SET_EDUCATION:
      return setEducation(state, action);
    case ACTION_TYPES.APPLICANT_PROFILE.SET_SKILLS:
      return setSkills(state, action);
    case ACTION_TYPES.APPLICANT_PROFILE.SET_LANGUAGES:
      return setLanguages(state, action);
    case ACTION_TYPES.APPLICANT_PROFILE.SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_TYPES.APPLICANT_PROFILE.SET_IS_PROFILE_LOADED:
      return {
        ...state,
        isApplicantProfileLoaded: action.payload,
      };
    case ACTION_TYPES.APPLICANT_PROFILE.SET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case ACTION_TYPES.APPLICANT_PROFILE.CLEAN_APPLICANT_PROFILE:
      return cleanProfile(state, action);
    default:
      return state;
  }
};

export default reducer;
