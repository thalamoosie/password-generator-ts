"use strict";
// Function to generate a passphrase
// const generatePhrase = function (
//   phraseLen: number = 2,
//   delim: string = "-",
//   vowSwap: boolean = false
// ) {
//   console.log(phraseLen);
// };
/**
 *
 * @param charLen Length of desired password in chars
 * @param inclUpper Includes Uppercase
 * @param inclNumber Includes Numbers
 * @param inclSymbol Includes Symbols
 */
const generatePw = function (charLen = 5, inclUpper, inclNumber, inclSymbol) {
    let chars = [];
    let charPool = [...asciiSymbols.lowerChars];
    const asciiPass = [];
    if (inclNumber) {
        const nums = asciiSymbols.numberChars;
        const randIndex = h.randomArrIndex(nums);
        chars.push(nums[randIndex]);
        charPool.push(...nums);
    }
    if (inclSymbol) {
        const sym = asciiSymbols.symbolChars;
        const randIndex = h.randomArrIndex(sym);
        chars.push(sym[randIndex]);
        charPool.push(...sym);
    }
    if (inclUpper) {
        const upper = asciiSymbols.upperChars;
        const randIndex = h.randomArrIndex(upper);
        chars.push(upper[randIndex]);
        charPool.push(...upper);
    }
    // Make a shallow copy of the password so far to keep track of required chars
    const requiredChars = [...chars];
    // Calculate remainder of length needed and sort randomly
    const remainder = charLen - requiredChars.length;
    chars.sort(() => Math.random() - 0.5);
    // Push random characters from character pool to Ascii holding array:
    for (let i = 0; i < remainder; i++) {
        const randIndex = h.randomArrIndex(charPool);
        const randChar = charPool[randIndex];
        asciiPass.push(randChar);
        console.log(`Random character added to password: ${randChar} : ${String.fromCharCode(randChar)}`);
    }
    // Sort array n times based on range of desired length of pw
    for (let i = 0; i <= h.randomNumber(1, charLen); i++) {
        asciiPass.sort(() => Math.random() - 0.5);
    }
    console.log("Required", requiredChars);
    console.log("AsciiPass", asciiPass);
    // if AsciiPass doesn't include the randomly generated required chars above, include them:
    if (!asciiPass.every((c) => requiredChars.includes(c))) {
        for (let i = 0; i < requiredChars.length; i++) {
            const randIndex = h.randomArrIndex(asciiPass);
            asciiPass[randIndex] = requiredChars[i];
            console.log("Ding!");
        }
    }
    console.log("Amended Asciipass", asciiPass);
    const finalPass = [];
    asciiPass.forEach((e) => {
        finalPass.push(String.fromCharCode(e));
    });
    const passwd = finalPass.join("");
    console.log(passwd);
    return passwd;
};
module.exports = { generatePw };
