export const generateMnemonics = baseMnemonicsArray => {
  let mnemonics = [];
  for (let i = 0; i < 24; i++) {
    mnemonics.push(baseMnemonicsArray[Math.floor(Math.random() * baseMnemonicsArray.length)]);
  }
  return mnemonics;
}