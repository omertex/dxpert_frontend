import axios from "axios";
import {
  BlockchainUrl,
  GetRole,
  Url,
  SetRole,
  GetRecruiter,
  SetRecruiter,
  UpdateRecruiter,
  GetResumesRequest,
  TemporaryBankWallet,
} from "../../configuration/BackendConsts";
import { signTransaction } from "../../services/transactions";
import ApolloClient from "apollo-boost";

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
  const signedData = signTransaction(data, wallet, accountMeta);
  return await axios
    .post(`${BlockchainUrl}/txs`, signedData)
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
    uri: Url,
  });
  return client
    .query({
      query: GetRole,
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
    uri: Url,
  });
  return client
    .mutate({
      mutation: SetRole,
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
    uri: Url,
  });
  return client
    .mutate({
      mutation: SetRecruiter,
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
    uri: Url,
  });
  return client
    .mutate({
      mutation: UpdateRecruiter,
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
    uri: Url,
  });
  return client
    .query({
      query: GetRecruiter,
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

export const getResumesRequests = async (data) => {
  const client = new ApolloClient({
    uri: Url,
  });
  return client
    .query({
      query: GetResumesRequest,
      variables: data,
    })
    .then((response) => {
      if (response && response.data && response.data.request_resumes) {
        return response.data.request_resumes;
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
