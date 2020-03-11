import cryptico from 'cryptico';

export const generateMnemonics = baseMnemonicsArray => {
  let mnemonics = [];
  for (let i = 0; i < 24; i++) {
    mnemonics.push({index:  i , value: baseMnemonicsArray[Math.floor(Math.random() * baseMnemonicsArray.length)]});
  }
  return mnemonics;
}

export const selectMnemonics = array => {
  const randomOne = Math.floor(Math.random() * array.length);
  const randomTwo = Math.floor(Math.random() * array.length);
  const randomThree = Math.floor(Math.random() * array.length);
  return array.filter((mnem, i) => i === randomOne || i === randomTwo || i === randomThree) //TODO: take random piece of array
}

export const generatePublicKey = (passPhrase, bits) => {
  const phrase = passPhrase.join(',');
  const privateKey = cryptico.generateRSAKey(phrase, bits);
  const publicKey = cryptico.publicKeyString(privateKey);
  return {
    privateKey,
    publicKey
  };
}

export const constructMnemonicPhrase = mnemonicsArray => {
  const phrase = mnemonicsArray.reduce((acc, cur) => acc + cur.value, "");
  return phrase;
}

