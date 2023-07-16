"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asciiSymbols = void 0;
const { createRange } = require("./utils");
exports.asciiSymbols = {
    symbolChars: createRange(33, 47)
        .concat(createRange(58, 64))
        .concat(createRange(91, 96)),
    upperChars: createRange(65, 90),
    lowerChars: createRange(97, 122),
    numberChars: createRange(48, 57),
};
