import { put } from "redux-saga/effects";
import axios from "axios";
import * as ACTIONS from "../actions";
import {
  BlockchainUrl,
  GQLGetRole,
  GQLUrl,
  GQLSetRole,
  GQLGetRecruiter,
  GQLSetRecruiter,
  GQLUpdateRecruiter,
  TemporaryBankWallet,
} from "../../configuration/BackendConsts";
import { signTransaction } from "../../services/transactions";
import ApolloClient from "apollo-boost";

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
      console.log("getApplicantProfile response", response);
      if (response && response.data && response.data.result) {
        return response.data.result.resume;
      } else {
        return {};
      }
    })
    .catch((response) => console.error(response));
};

export const sendTransaction = async (data, wallet, accountMeta) => {
  if (accountMeta.account_number === "0") {
    return false;
  }
  const signData = signTransaction(data, wallet, accountMeta);
  return await axios
    .post(`${BlockchainUrl}/txs`, signData)
    .then((response) => response.status === 200)
    .catch((response) => console.error(response));
};

export const getAccountInfo = async (address) => {
  return axios
    .get(`${BlockchainUrl}/auth/accounts/${address}`)
    .then((response) => {
      if (
        response &&
        response.data &&
        response.data.result &&
        response.data.result.value
      ) {
        const result = response.data.result.value;
        return {
          account_number: result.account_number.toString(),
          sequence: result.sequence.toString(),
          coins: result.coins.length ? result.coins[0].amount.toString() : "0",
        };
      } else {
        return {};
      }
    })
    .catch((response) => console.error(response));
};

export const getAccountRole = async (address) => {
  const client = new ApolloClient({
    uri: GQLUrl,
  });
  return client
    .query({
      query: GQLGetRole,
      variables: {
        address,
      },
    })
    .then((response) => {
      if (response && response.data && response.data.roles_by_pk) {
        return response.data.roles_by_pk.role;
      }
    })
    .catch((error) => console.log(error));
};

export const setAccountRole = async (address, role) => {
  const client = new ApolloClient({
    uri: GQLUrl,
  });
  return client
    .mutate({
      mutation: GQLSetRole,
      variables: {
        address,
        role,
      },
    })
    .then((response) => {
      if (response && response.data && response.data.insert_roles) {
        return true;
      }
    })
    .catch((error) => console.log(error));
};

export const getAllTransactions = async (address) => {
  const request = async (link) => {
    return axios
      .get(link)
      .then((response) => {
        if (response && response.data && response.data.txs) {
          return response.data.txs;
        } else {
          return {};
        }
      })
      .catch((response) => console.log(response));
  };
  const [send, UploadResume, RequestResume, Response] = await Promise.all([
    request(
      `${BlockchainUrl}/txs?message.action=send&page=1&limit=1000&message.sender=${address}`
    ),
    request(
      `${BlockchainUrl}/txs?message.action=UploadResume&page=1&limit=1000&message.sender=${address}`
    ),
    request(
      `${BlockchainUrl}/txs?message.action=RequestResume&page=1&limit=1000&message.sender=${address}`
    ),
    request(
      `${BlockchainUrl}/txs?message.action=Response&page=1&limit=1000&message.sender=${address}`
    ),
  ]);

  return [...send, ...UploadResume, ...RequestResume, ...Response];
};

export const setEmployerProfile = async (data) => {
  const client = new ApolloClient({
    uri: GQLUrl,
  });
  return client
    .mutate({
      mutation: GQLSetRecruiter,
      variables: data,
    })
    .then((response) => {
      if (response && response.data && response.data.insert_recruiters) {
        return true;
      }
    })
    .catch((error) => console.log(error));
};

export const updateEmployerProfile = async (data) => {
  const client = new ApolloClient({
    uri: GQLUrl,
  });
  return client
    .mutate({
      mutation: GQLUpdateRecruiter,
      variables: data,
    })
    .then((response) => {
      if (response && response.data && response.data.update_recruiters) {
        return true;
      }
    })
    .catch((error) => console.log(error));
};

export const getEmployerProfile = async (address) => {
  const client = new ApolloClient({
    uri: GQLUrl,
  });
  return client
    .query({
      query: GQLGetRecruiter,
      variables: {
        address,
      },
    })
    .then((response) => {
      if (response && response.data && response.data.recruiters_by_pk) {
        return response.data.recruiters_by_pk;
      }
    })
    .catch((error) => console.log(error));
};

export const fillUpBalance = async (address) => {
  const moneyAccountMeta = await getAccountInfo(TemporaryBankWallet.address);
  const requestBody = {
    type: "cosmos-sdk/MsgSend",
    value: {
      from_address: TemporaryBankWallet.address,
      to_address: address,
      amount: [
        {
          denom: "coin",
          amount: "10",
        },
      ],
    },
  };
  await sendTransaction(requestBody, TemporaryBankWallet, moneyAccountMeta);
  const accountInfo = await getAccountInfo(address);
  return accountInfo.coins;
};
