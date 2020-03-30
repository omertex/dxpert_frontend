import { createAddress, createWalletFromMnemonic } from "@tendermint/sig";
import { publicKeyCreate as secp256k1PublicKeyCreate } from "secp256k1";
import AESCryptoKey from "../configuration/AESCryptoKey";

export const generateMnemonics = (baseMnemonicsArray) => {
  let mnemonics = [];
  for (let i = 0; i < 24; i++) {
    mnemonics.push({
      index: i,
      value:
        baseMnemonicsArray[
          Math.floor(Math.random() * baseMnemonicsArray.length)
        ],
    });
  }
  return mnemonics;
};

export const selectMnemonics = (array, qty) => {
  const randomNumbers = [];
  while (randomNumbers.length < qty) {
    const random = Math.floor(Math.random() * array.length);
    if (!randomNumbers.includes(random)) randomNumbers.push(random);
  }

  return array.filter((mnem, i) => randomNumbers.includes(i));
};

export const generateWalletByMnemonic = (wallet) => {
  return createWalletFromMnemonic(wallet, undefined, "dxpert");
};

export const generateWalletByPrivateKey = (key) => {
  const privateKey = new Uint8Array(key);
  const publicKey = secp256k1PublicKeyCreate(privateKey);
  const address = createAddress(publicKey, "dxpert");
  return { privateKey, publicKey, address };
};

export const constructMnemonicPhrase = (mnemonicsArray) => {
  return mnemonicsArray.reduce((acc, cur) => acc + cur.value, "");
};

export const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

export const base64ToArrayBuffer = (base64) => {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
};

export const resizePassword = (password) => {
  if (password.length >= 16) {
    return password;
  }
  let resizedPassword = password;
  while (resizedPassword.length < 16) {
    resizedPassword += password;
  }
  return resizedPassword.slice(0, 16);
};

export const arrayBufferEncryption = async (value, password) => {
  const key = await window.crypto.subtle.importKey(
    "jwk",
    AESCryptoKey[0],
    {
      name: "AES-CBC",
      length: 128,
    },
    true,
    ["encrypt", "decrypt"]
  );
  const iv = new TextEncoder().encode(resizePassword(password));
  const result = await crypto.subtle.encrypt(
    { name: "AES-CBC", tagLength: 64, iv },
    key,
    value
  );
  return arrayBufferToBase64(result);
};

export const base64Decryption = async (value, password) => {
  const convertValue = base64ToArrayBuffer(value);
  const key = await window.crypto.subtle.importKey(
    "jwk",
    AESCryptoKey[0],
    {
      name: "AES-CBC",
      length: 128,
    },
    true,
    ["encrypt", "decrypt"]
  );
  const iv = new TextEncoder().encode(resizePassword(password));
  return await crypto.subtle.decrypt(
    { name: "AES-CBC", tagLength: 64, iv },
    key,
    convertValue
  );
};

export const createKeystoreFile = async (value, password) => {
  const encryptValue = await arrayBufferEncryption(value, password);
  const element = document.createElement("a");

  element.setAttribute("href", "data:text/plain;charset=utf-8," + encryptValue);
  element.setAttribute("download", "keystore.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  return true;
};

export const sendTransaction = (passPhrase) => {
  // const pprivate = new Uint8Array([156, 211, 72, 112, 41, 120, 24, 84, 42, 204, 202, 206, 171, 246, 188, 13, 206, 96, 12, 42, 69, 41, 220, 143, 85, 91, 19, 250, 45, 124, 71, 9]);
  // const ppublic = new Uint8Array([3, 78, 250, 98, 235, 250, 154, 50, 173, 168, 197, 127, 91, 41, 31, 203, 160, 247, 104, 204, 76, 98, 105, 108, 174, 120, 77, 55, 171, 218, 121, 124, 168]);
  // const wallet = {
  //   privateKey: pprivate,
  //   publicKey: ppublic,
  //   address: "dxpert1ka08uzst48ralnwjc6yzyfq8xp0jk26e3459yp"
  // };
  //
  // const tx = {
  //     "msg": [
  //       {
  //         "type": "cosmos-sdk/MsgSend",
  //         "value": {
  //           "from_address": "dxpert1ka08uzst48ralnwjc6yzyfq8xp0jk26e3459yp",
  //           "to_address": "dxpert106cxgeplhu8da49zapj0gfnak80vf5v5zdr8gl",
  //           "amount": [
  //             {
  //               "denom": "coin",
  //               "amount": "1"
  //             }
  //           ]
  //         }
  //       }
  //     ],
  //     "fee": {
  //       "amount": [],
  //       "gas": "200000"
  //     },
  //     "memo": ""
  // };
  //
  // const signMeta = {
  //   account_number: '8',
  //   chain_id:       'dxp-chain',
  //   sequence:       '0'
  // };
  //
  // const stdTx = signTx(tx, signMeta, wallet);
  // const valid = verifyTx(stdTx, signMeta);
  // console.log(valid);
  // const gg = {
  //   tx: { ...stdTx },
  //   mode: "block"
  // };
  // // console.log(gg);
  // axios.post('/txs', gg)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
};
