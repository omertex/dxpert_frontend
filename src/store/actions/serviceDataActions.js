import { SERVICE_DATA } from "../actions/actionTypes";

// get auth token for the countries, cities REST API
export const getAuthTokenAction = () => ({type: SERVICE_DATA.GET_AUTH_TOKEN});

export const getCountriesListAction = () => ({type: SERVICE_DATA.GET_COUNTRIES_LIST});

export const getCitiesListAction = (country) => ({type: SERVICE_DATA.GET_CITIES_LIST, payload: country});
