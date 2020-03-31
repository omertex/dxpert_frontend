import axios from "axios";

const BlockchainUrl = "http://dev.omertex.com:17864";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const getAccountInfo = async (address) => {
  return axios
    .get(`${CORS_PROXY}${BlockchainUrl}/auth/accounts/${address}`)
    .then((response) => {
      const result = response["data"]["result"]["value"];
      return {
        account_number: result["account_number"] || 0,
        sequence: result["sequence"] || 0,
        coins: result["coins"].length ? result["coins"][0]["amount"] : 0,
      };
    })
    .catch((response) => console.log(response));
};

export const signTransaction = (passPhrase) => {
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
