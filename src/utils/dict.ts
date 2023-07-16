const { createRange } = require("./utils");

export const asciiSymbols = {
  symbolChars: createRange(33, 47)
    .concat(createRange(58, 64))
    .concat(createRange(91, 96)),
  upperChars: createRange(65, 90),
  lowerChars: createRange(97, 122),
  numberChars: createRange(48, 57),
};
