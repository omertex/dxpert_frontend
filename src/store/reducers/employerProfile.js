import * as ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  profile: {},
  isProfileLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.EMPLOYER_PROFILE.GET_EMPLOYER_PROFILE_SUCCESS:
      return { profile: action.payload, isProfileLoaded: true };
    //     case ACTION_TYPES.EMPLOYER_PROFILE.CLEAN_EMPLOYER_PROFILE:
    //       return cleanProfile(state, action);
    default:
      return state;
  }
};

export default reducer;
