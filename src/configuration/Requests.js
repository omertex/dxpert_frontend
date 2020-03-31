import axios from "axios";
import { base64ToArrayBuffer } from "../configuration/helpers";
import { signTx, verifyTx } from "@tendermint/sig";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const BlockchainUrl = `${CORS_PROXY}http://dev.omertex.com:17864`;

export const signTransaction = (data, wallet, accountMeta) => {
  const convertWallet = {
    privateKey: new Uint8Array(base64ToArrayBuffer(wallet.privateKey)),
    publicKey: new Uint8Array(base64ToArrayBuffer(wallet.publicKey)),
    address: wallet.address,
  };

  const tx = {
    msg: [data],
    fee: {
      amount: [],
      gas: "200000",
    },
    memo: "",
  };

  const signMeta = {
    chain_id: "dxp-chain",
    ...accountMeta,
  };
  const stdTx = signTx(tx, signMeta, convertWallet);
  const valid = verifyTx(stdTx, signMeta);

  if (valid) {
    return { tx: { ...stdTx }, mode: "block" };
  }
  return undefined;
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

export const getResume = async (address) => {
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
