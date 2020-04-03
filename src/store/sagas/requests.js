import { put } from "redux-saga/effects";
import axios from "axios";
import * as ACTIONS from "../actions";
import { BlockchainUrl } from "../../configuration/BackendConsts";
import { signTransaction } from "../../services/transactions";

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
  return axios.get("https://www.universal-tutorial.com/api/countries/", {
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    },
  });
};

export const getStatesList = async (authToken, country) => {
  return axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    },
  });
};

export const getCitiesList = async (authToken, state) => {
  return axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    },
  });
};

export const getApplicantProfile = async (address) => {
  return axios
    .get(`${BlockchainUrl}/dxpert/resume/${address}`)
    .then((response) => {
      if (response && response.data && response.data.result) {
        return response.data.result.resume;
      } else {
        return {};
      }
    })
    .catch((response) => console.log(response));
};

export const sendTransaction = async (data, wallet, accountMeta) => {
  const signData = signTransaction(data, wallet, accountMeta);
  const transaction = await axios
    .post(`${BlockchainUrl}/txs`, signData)
    .then((response) => response.status === 200)
    .catch((response) => console.log(response));
  const accountInfo = await getAccountInfo(wallet.address);
  return {
    status: transaction,
    accountInfo,
  };
};

export const getAccountInfo = async (address) => {
  return axios
    .get(`${BlockchainUrl}/auth/accounts/${address}`)
    .then((response) => {
      const result = response.data.result.value;
      return {
        account_number: result.account_number.toString() || "0",
        sequence: result.sequence.toString() || "0",
        coins: result.coins.length ? result.coins[0].amount.toString() : "0",
      };
    })
    .catch((response) => console.log(response));
};
