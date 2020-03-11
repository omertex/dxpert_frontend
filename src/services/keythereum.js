import { create, dump, recover, exportToFile } from "keythereum-pure-js";

function createWallet(password) {
  const params = {keyBytes: 32, ivBytes: 16};
  const dk = create(params);

  const options = {
    kdf: 'pbkdf2',
    cipher: 'aes-128-ctr',
    kdfparams: { c: 262144, dklen: 32, prf: 'hmac-sha256' }
  };
  const keyObject = dump(password, dk.privateKey, dk.salt, dk.iv, options);
  return keyObject;
}

function getPrivateKey(password, keyObject) {
  return recover(password, keyObject);
}



const keyObject = createWallet("Password");
const walletAddress = '0x' + keyObject.address;

const privateKey = getPrivateKey("Password", keyObject);

exportToFile(keyObject);

console.log("walletAddress", walletAddress);
console.log("privateKey", privateKey);