const { ifError } = require("assert");
const data = require("../../dist/wordlist");
const fs = require("fs");
const createAlphabetObject = function () {
  const wordLetter = {};
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (const letter of alphabet) {
    wordLetter[letter] = [];
  }

  for (const word of data) {
    const firstLetter = word.charAt(0).toLowerCase();
    wordLetter[firstLetter].push(word);
  }
  console.log(wordLetter);
  return wordLetter;
};

const outData = createAlphabetObject();
const outputFilePath = "wordsSortedByLetter.json";
const output = JSON.stringify(outData, null, 2);

fs.writeFile(outputFilePath, output, (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
    return;
  }
  console.log(`Object written to ${outputFilePath}`);
});
