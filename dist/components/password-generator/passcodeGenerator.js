"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createUniqueValues, randomArrIndex } = require("../../utils/utils");
const { asciiSymbols } = require("../../utils/dict");
const data = require(`../../utils/wordSortedByLetter`);
// For char substitution
const leetSpeak = {
    a: ["4", "@"],
    s: ["5", "$"],
    e: ["3", "e"],
    t: ["7", "t"],
    i: ["1", "!"],
    o: ["0", "o"],
};
// Create an array from A-Z lowecase to generate a random passphrase startLetter list
// const asciiTest: string[] = asciiSymbols.lowerChars.map((char: number) =>
//   String.fromCharCode(char)
// );
/**
 *
 * @param arr Array of words for passphrase to be substituted
 * @param key Key string based on the keys in an object mapping chars to substitutions
 */
const substituteWords = function (arr, key) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(new RegExp(`[${key}]`, "gi"), (char) => { var _a, _b; return (_b = (_a = leetSpeak[char]) === null || _a === void 0 ? void 0 : _a[randomArrIndex(leetSpeak[char])]) !== null && _b !== void 0 ? _b : char; });
        //pass
    }
    return arr;
};
// Function to generate a passphrase
const generatePassphrase = function (phraseLen = 3, delim = "-", charSwap = false, capitalize = false) {
    try {
        // const passwordValues = createUniqueValues(phraseLen, 1, wordsLen);
        // const phraseArray: string[] = [];
        const searchLetters = [];
        // Store the data object's keys:
        const wordKeys = Object.keys(data);
        // Create a holding array of alphabet letters to use for looking up words
        for (let i = 0; i < phraseLen; i++) {
            searchLetters.push(wordKeys[randomArrIndex(wordKeys)]);
        }
        console.log(`Letters: `, searchLetters);
        // Find words randomly based on key using the searchLetters array:
        const phraseArray = Array.from(searchLetters, (key) => { var _a; return (_a = data[key]) === null || _a === void 0 ? void 0 : _a[randomArrIndex(data[key])]; });
        console.log(phraseArray);
        // for (const num of passwordValues) {
        //   phraseArray.push(data[num]);
        // }
        if (charSwap) {
            // Use keys in leetspeak for pattern match
            const charKey = Object.keys(leetSpeak).join("");
            substituteWords(phraseArray, charKey);
        }
        // Capitalize 1 random word in all caps if selected:
        if (capitalize) {
            const randomIndex = randomArrIndex(phraseArray);
            const capWord = phraseArray[randomIndex].toUpperCase();
            phraseArray[randomIndex] = capWord;
        }
        const finalPassphrase = phraseArray.join(delim);
        console.log("FINAL PASSPHRASE");
        console.log(finalPassphrase);
        return finalPassphrase;
    }
    catch (err) {
        console.error(`Error generating password: ${err}`);
        throw err;
    }
};
generatePassphrase(8, ":", true, true);
generatePassphrase(6, undefined, false, true);
