const h = require("./littleHelpers");
const loadWordList = require("./wordLoader");
// const dicts = require("./dicts");

// const newSetOne = h.createUniqueValues(10, 2, 200000);
// console.log(newSetOne);

const asciiSymbols = {
  symbolChars: h
    .createRange(33, 47)
    .concat(h.createRange(58, 64))
    .concat(h.createRange(91, 96)),
  upperChars: h.createRange(65, 90),
  lowerChars: h.createRange(97, 122),
  numberChars: h.createRange(48, 57),
};

// For char substitution
const leetSpeak = {
  a: ["4", "@"],
  s: ["5", "$"],
  e: ["3", "e"],
  t: ["7", "t"],
  i: ["1", "!"],
  o: ["0", "()"],
};

// Function to generate a passphrase

const generatePhrase = async function (
  phraseLen: number = 2,
  delim: string = "-",
  charSwap: boolean = false,
  capitalize: boolean = false
) {
  try {
    const words = await loadWordList();
    const wordsLen: number = words.length;
    const pwValues = h.createUniqueValues(phraseLen, 1, wordsLen);
    const phraseArray: string[] = [];

    for (const num of pwValues) {
      phraseArray.push(words[num]);
    }

    if (charSwap) {
      // For each string in the array, if the character in the string matches one of the keys in leetSpeak
      // Then substitute that character in place[i] with a random element from the array - use the randomArrIndex() helper function

      console.log("Swap, please");
    }

    // Capitalize 1 random word in all caps if selected:
    if (capitalize) {
      const rIndex: number = h.randomNumber(0, phraseArray.length);
      const capWord: string = phraseArray[rIndex].toUpperCase();
      phraseArray[rIndex] = capWord;
    }

    const finalPassphrase: string = phraseArray.join(delim);
    console.log("FINAL PASSPHRASE");
    console.log(finalPassphrase);

    return finalPassphrase;
  } catch (err) {
    console.error(`Error generating password: ${err}`);
    throw err;
  }
};

generatePhrase(8, ":", true, true).catch((err) => {
  console.error(err);
});

generatePhrase(6, undefined, true, true).catch((err) => {
  console.error(err);
});

// const generatePhrase = async function (
//   phraseLen: number = 2,
//   delim: string = "-",
//   charSwap: boolean = false,
//   capitalize: boolean = false
// ) {
//   async function accessWordList() {
//     try {
//       const words = await loadWordList();
//       const wordsLen: number = words.length;
//       const pwValues = h.createUniqueValues(phraseLen, 1, wordsLen);
//     } catch (err) {
//       console.error(`Error loading wordlist: ${err}`);
//     }

//     const phraseArray: string[] = [];

//     for (const num of pwValues) {
//       phraseArray.push(words[num]);
//     }

//     console.log(wordsLen);
//     console.log(phraseArray);

//     if (charSwap) {
//       // For each string in the array, if the character in the string matches one of the keys in leetSpeak
//       // Then substitute that character in place[i] with a random element from the array - use the randomArrIndex() helper function

//       console.log("ello govna");
//     }

//     if (capitalize) {
//       // Make a random word in the passphrase all caps
//     }

//     const finalPassphrase: string = phraseArray.join(delim);

//     console.log(finalPassphrase);
//     return finalPassphrase;
//   }

//   accessWordList().catch((err) => {
//     console.error(err);
//   });
// };

// /**
//  *
//  * @param charLen Length of desired password in chars
//  * @param inclUpper Includes Uppercase
//  * @param inclNumber Includes Numbers
//  * @param inclSymbol Includes Symbols
//  */

// const generatePw = function (
//   charLen: number = 5,
//   inclUpper: boolean,
//   inclNumber: boolean,
//   inclSymbol: boolean
// ) {
//   let chars: number[] = [];
//   let charPool: number[] = [...asciiSymbols.lowerChars];
//   const asciiPass: number[] = [];

//   if (inclNumber) {
//     const nums = asciiSymbols.numberChars;
//     const randIndex = h.randomArrIndex(nums);
//     chars.push(nums[randIndex]);
//     charPool.push(...nums);
//   }
//   if (inclSymbol) {
//     const sym = asciiSymbols.symbolChars;
//     const randIndex = h.randomArrIndex(sym);
//     chars.push(sym[randIndex]);
//     charPool.push(...sym);
//   }
//   if (inclUpper) {
//     const upper = asciiSymbols.upperChars;
//     const randIndex = h.randomArrIndex(upper);
//     chars.push(upper[randIndex]);
//     charPool.push(...upper);
//   }

//   // Make a shallow copy of the password so far to keep track of required chars
//   const requiredChars: number[] = [...chars];
//   // Calculate remainder of length needed and sort randomly
//   const remainder = charLen - requiredChars.length;
//   chars.sort(() => Math.random() - 0.5);

//   // Push random characters from character pool to Ascii holding array:
//   for (let i = 0; i < remainder; i++) {
//     const randIndex = h.randomArrIndex(charPool);
//     const randChar = charPool[randIndex];
//     asciiPass.push(randChar);
//     console.log(
//       `Random character added to password: ${randChar} : ${String.fromCharCode(
//         randChar
//       )}`
//     );
//   }

//   // Sort array n times based on range of desired length of pw

//   for (let i = 0; i <= h.randomNumber(1, charLen); i++) {
//     asciiPass.sort(() => Math.random() - 0.5);
//   }

//   console.log("Required", requiredChars);
//   console.log("AsciiPass", asciiPass);

//   // if AsciiPass doesn't include the randomly generated required chars above, include them:
//   if (!asciiPass.every((c) => requiredChars.includes(c))) {
//     for (let i = 0; i < requiredChars.length; i++) {
//       const randIndex = h.randomArrIndex(asciiPass);
//       asciiPass[randIndex] = requiredChars[i];
//       console.log("Ding!");
//     }
//   }
//   console.log("Amended Asciipass", asciiPass);

//   const finalPass: String[] = [];

//   asciiPass.forEach((e) => {
//     finalPass.push(String.fromCharCode(e));
//   });

//   const passwd = finalPass.join("");
//   console.log(passwd);
//   return passwd;
// };

// generatePw(48, true, true, true);
