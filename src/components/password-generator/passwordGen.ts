const {
  createRange,
  randomArrIndex,
  randomNumber,
} = require("../../utils/utils");
const { asciiSymbols } = require("../../utils/dict");

/**
 *
 * @param charLen Length of desired password in chars
 * @param inclUpper Includes Uppercase
 * @param inclNumber Includes Numbers
 * @param inclSymbol Includes Symbols
 */

const generatePassword = function (
  charLen: number = 5,
  inclUpper: boolean,
  inclNumber: boolean,
  inclSymbol: boolean
) {
  let chars: number[] = [];
  let charPool: number[] = [...asciiSymbols.lowerChars];
  const asciiPass: number[] = [];

  if (inclNumber) {
    const nums = asciiSymbols.numberChars;
    const randIndex = randomArrIndex(nums);
    chars.push(nums[randIndex]);
    charPool.push(...nums);
  }
  if (inclSymbol) {
    const sym = asciiSymbols.symbolChars;
    const randIndex = randomArrIndex(sym);
    chars.push(sym[randIndex]);
    charPool.push(...sym);
  }
  if (inclUpper) {
    const upper = asciiSymbols.upperChars;
    const randIndex = randomArrIndex(upper);
    chars.push(upper[randIndex]);
    charPool.push(...upper);
  }

  // Make a shallow copy of the password so far to keep track of required chars
  const requiredChars: number[] = [...chars];

  // Calculate remainder of length needed and sort randomly
  const remainder = charLen - requiredChars.length;
  chars.sort(() => Math.random() - 0.5);

  // Push random characters from character pool to Ascii holding array:
  for (let i = 0; i < remainder; i++) {
    const randIndex = randomArrIndex(charPool);
    const randChar = charPool[randIndex];
    asciiPass.push(randChar);
    console.log(
      `Random character added to password: ${randChar} : ${String.fromCharCode(
        randChar
      )}`
    );
  }

  // Sort array n times based on range of desired length of pw

  for (let i = 0; i <= randomNumber(1, charLen); i++) {
    asciiPass.sort(() => Math.random() - 0.5);
  }

  console.log("Required", requiredChars);
  console.log("AsciiPass", asciiPass);

  if (!asciiPass.every((c) => requiredChars.includes(c))) {
    for (let i = 0; i < requiredChars.length; i++) {
      if (!asciiPass.includes(requiredChars[i])) {
        const randIndex = randomArrIndex(asciiPass);
        asciiPass.push(requiredChars[i]);
      }
    }
  }

  console.log("Amended Asciipass", asciiPass);

  const finalPass: string[] = [];
  asciiPass.forEach((e) => {
    finalPass.push(String.fromCharCode(e));
  });

  const passwd = finalPass.join("");
  console.log("password: ", passwd);
  return passwd;
};

module.exports = { generatePassword };
