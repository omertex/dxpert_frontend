import { base64ToArrayBuffer } from "../configuration/helpers";
import { signTx, verifyTx } from "@tendermint/sig";

export const signTransaction = (data, wallet, accountMeta) => {
  const convertWallet = {
    privateKey: base64ToArrayBuffer(wallet.privateKey),
    publicKey: base64ToArrayBuffer(wallet.publicKey),
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
