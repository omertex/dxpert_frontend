import { put } from "redux-saga/effects";
import axios from "axios";

import * as ACTIONS from "../actions";

export function* getTxsByIdSaga(action) {
  console.log(action.txType, action.senderAddress);
  const response = yield axios.get(
    `/txs?message.action=${action.txType}&message.sender=${action.senderAddress}`
  );
  console.log("response is: ", response.data.txs);
  yield put(ACTIONS.setTxs(response.data.txs));
}

export const getAuthToken = async () => {
  return axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
    headers: {
      Accept: "application/json",
      "api-token":
        "230zVACT9pKcxQ42nVfIdKB3i_ZRukh8dsyuOCu3AsBUSt-SiqBSzFh6t6ZLFoYAQZ8",
      "user-email": "10wilm@mail.ru",
    },
  });
};

export const getCountriesList = async (authToken) => {
  return axios.get("https://www.universal-tutorial.com/api/countries/",{
    headers: {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    }
  })
}

export const getStatesList = async (authToken, country) => {
  return axios.get(`https://www.universal-tutorial.com/api/states/${country}`,{
    headers: {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    }
  })
}

export const getCitiesList = async (authToken, state) => {
  return axios.get(`https://www.universal-tutorial.com/api/cities/${state}`,{
    headers: {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    }
  })
}
