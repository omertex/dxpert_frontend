import * as actionTypes from '../actions/actionTypes';

const initialState = {
  chosenWay: "",
  companyDetails: {
    company: "Omer",
    email: "",
    country: "",
    city: "",
    website: "",
    aboutCompany: ""
  }
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.CHOOSE_WAY:
      return {
        ...state,
        chosenWay: action.way
      };
    case actionTypes.CHANGE_DETAILS:
      return {
        ...state,
        companyDetails: {
          ...state.companyDetails,
          [action.data.name]: action.data.value
        }
      }
  }
  return state;
};