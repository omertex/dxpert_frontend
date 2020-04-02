import { createAddress, createWalletFromMnemonic } from "@tendermint/sig";
import { publicKeyCreate as secp256k1PublicKeyCreate } from "secp256k1";
import { decrypt, encrypt } from "eciesjs";
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
  return bytes;
};

export const base64ToHex = (base64) => {
  const arrayBuffer = base64ToArrayBuffer(base64);
  const view = new Uint8Array(arrayBuffer);
  let result = "";
  let value;

  for (let i = 0; i < view.length; i++) {
    value = view[i].toString(16);
    result += value.length === 1 ? "0" + value : value;
  }

  return result;
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
  const convertValue = base64ToArrayBuffer(value).buffer;
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

export const encryptByPublicKey = (publicKey, string) => {
  const data = new TextEncoder().encode(string);
  const enc = encrypt(base64ToHex(publicKey), data);
  return enc.toString("base64");
};

export const decryptByPrivateKey = (privateKey, base64) => {
  const data = Buffer.from(base64, "base64");
  const enc = decrypt(base64ToHex(privateKey), data);
  return enc.toString();
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
