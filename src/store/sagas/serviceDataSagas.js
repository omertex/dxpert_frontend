import { getAuthToken, getCountriesList, getStatesList, getCitiesList } from "./requests";
import { takeLatest, put, select } from "redux-saga/effects";
import { SERVICE_DATA } from "../actions/actionTypes";

function* getAuthTokenSaga() {
  const response = yield getAuthToken();
  const token = response.data.auth_token;
  localStorage.setItem("geoAuthToken", token);
  yield put({
    type: SERVICE_DATA.SET_AUTH_TOKEN,
    payload: token,
  });
}

export function* getAuthTokenWatcher() {
  yield takeLatest(SERVICE_DATA.GET_AUTH_TOKEN, getAuthTokenSaga);
}

function* getCountriesSaga() {
  try {
    const token = localStorage.getItem("geoAuthToken");
    const { data } = yield getCountriesList(token);
    yield put({
      type: SERVICE_DATA.SET_COUNTRIES_LIST,
      payload: data.map((item) => item.country_name),
    });
  } catch (e) {
    yield getAuthTokenSaga();
    const token = yield select((state) => state.serviceData.authToken);
    const { data } = yield getCountriesList(token);
    yield put({
      type: SERVICE_DATA.SET_COUNTRIES_LIST,
      payload: data.map((item) => item.country_name),
    });
  }
}

export function* getCountriesWatcher() {
  yield takeLatest(SERVICE_DATA.GET_COUNTRIES_LIST, getCountriesSaga);
}

function* getCitiesSaga({payload}) {
  try {
    const token = localStorage.getItem("geoAuthToken");
    const { data: statesData } = yield getStatesList(token, payload);
    const state = statesData[0].state_name;
    const { data: citiesData } = yield getCitiesList(token, state);
    yield put({
      type: SERVICE_DATA.SET_CITIES_LIST,
      payload: citiesData.map((item) => item.city_name),
    });
  } catch (e) {
    console.error(e);
    yield getAuthTokenSaga();
    const token = yield select((state) => state.serviceData.authToken);
    const { data: statesData } = yield getStatesList(token, payload);
    const state = statesData[0].state_name;
    const { data: citiesData } = yield getCitiesList(token, state);
    yield put({
      type: SERVICE_DATA.SET_CITIES_LIST,
      payload: citiesData.map((item) => item.city_name),
    });
  }
}

export function* getCitiesWatcher() {
  yield takeLatest(SERVICE_DATA.GET_CITIES_LIST, getCitiesSaga);
}
