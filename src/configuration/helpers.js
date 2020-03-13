import cryptico from "cryptico";

export const generateMnemonics = baseMnemonicsArray => {
  let mnemonics = [];
  for (let i = 0; i < 24; i++) {
    mnemonics.push({
      index: i,
      value:
        baseMnemonicsArray[
          Math.floor(Math.random() * baseMnemonicsArray.length)
        ]
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

export const generatePublicKey = passPhrase => {
  const privateKey = cryptico.generateRSAKey(passPhrase, 1024);
  const publicKey = cryptico.publicKeyString(privateKey);
  return {
    privateKey,
    publicKey
  };
};

export const constructMnemonicPhrase = mnemonicsArray => {
  const phrase = mnemonicsArray.reduce((acc, cur) => acc + cur.value, "");
  return phrase;
};
