import * as actionTypes from './actions';

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

export const rootReducer = ( state = initialState, action ) => {
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