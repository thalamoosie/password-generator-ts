"use strict";
const h = require("./littleHelpers");
// Takes the desired password length
// Booleans: INcludes Uppercase, IncludesLowerCase, Includes nubmer, Includes symbols
// Depending on boolean flags, will assemble a new password based on pre-defined arrays of ASCII character ranges
const asciiSymbols = {
    symbolChars: h
        .createRange(33, 47)
        .concat(h.createRange(58, 64))
        .concat(h.createRange(91, 96)),
    upperChars: h.createRange(65, 90),
    lowerChars: h.createRange(97, 122),
    numberChars: h.createRange(48, 57),
};
const generatePhrase = function (wordLen = 5) {
    console.log(wordLen);
};
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
    console.log("CharPool Start:", charPool);
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
    const remainder = charLen - requiredChars.length;
    chars.sort(() => Math.random() - 0.5);
    for (let i = 0; i < remainder; i++) {
        const randIndex = h.randomArrIndex(charPool);
        const randChar = charPool[randIndex];
        asciiPass.push(randChar);
        console.log(`Random character added to password: ${randChar} : ${String.fromCharCode(randChar)}`);
    }
    // console.log("For Loop w/ Required Chars: ");
    // for (const requiredChar of requiredChars) {
    //   const randIndex = h.randomArrIndex(asciiPass);
    //   asciiPass[randIndex] = requiredChar;
    //   console.log(asciiPass[randIndex]);
    // }
    // Compile a nice, random ASCII password array based on the desired length
    // Sort the array randomly so you don't just get the first range
    // Do it n times, n = a random number of times based on length of password desired
    for (let i = 0; i <= h.randomNumber(1, charLen); i++) {
        asciiPass.sort(() => Math.random() - 0.5);
    }
    console.log("Required", requiredChars);
    console.log("AsciiPass", asciiPass);
    const requireStub = [51, 60, 67];
    if (!asciiPass.every((c) => requiredChars.includes(c))) {
        for (let i = 0; i < requiredChars.length; i++) {
            const randIndex = h.randomArrIndex(asciiPass);
            asciiPass[randIndex] = requiredChars[i];
            console.log("Ding!");
        }
    }
    console.log("Amended Asciipass", asciiPass);
    // Check to make sure that the asciiPass array contains one of the sorted Types
    const finalPass = [];
    asciiPass.forEach((e) => {
        finalPass.push(String.fromCharCode(e));
    });
    const passwd = finalPass.join("");
    console.log(passwd);
    return passwd;
};
generatePw(16, true, true, true);
