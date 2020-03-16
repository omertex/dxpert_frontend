import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  aboutMe: "About me...",
  contacts: {},
  workExperience: {},
  education: {},
  skills: [],
  languages: []
};

const setAboutMe = (state, action) => {
  return updateObject(state, { aboutMe: action.payload });
};

const setContacts = (state, action) => {
  return updateObject(state, { contacts: action.payload })
}

const setWorkExperience = (state, action) => {
  return updateObject(state, { workExperience: action.payload })
}

const setEducation = (state, action) => {
  return updateObject(state, { education: action.payload })
}

const setSkills = (state, action) => {
  return updateObject(state, { skills: action.payload })
}

const setLanguages = (state, action) => {
  return updateObject(state, { languages: action.payload })
}

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
    default:
      return state;
  }
};

export default reducer;