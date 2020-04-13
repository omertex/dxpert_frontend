import { SERVICE_DATA } from "../actions/actionTypes";

const initialReducerState = {
  authToken: "",
  countries: [],
  cities: [],
};

const serviceDataReducer = (state = initialReducerState, action) => {
  switch (action.type) {
    case SERVICE_DATA.SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case SERVICE_DATA.SET_COUNTRIES_LIST:
      return {
        ...state,
        countries: action.payload,
      };
    case SERVICE_DATA.SET_CITIES_LIST:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default serviceDataReducer;
