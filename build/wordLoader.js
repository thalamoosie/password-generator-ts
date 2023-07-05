"use strict";
// This monstrosity lazy loads my fat ass array
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = require("./wordlist");
let wordData = null;
// async function fetchWordlist(): Promise<void> {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       wordData = data;
//       resolve();
//     }, 1000);
//   });
// }
// async function getWordList(): Promise<string[]> {
//   if (!wordData) await fetchWordlist();
//   return wordData!;
// }
function fetchWordlist() {
    return __awaiter(this, void 0, void 0, function* () {
        wordData = data;
        return Promise.resolve();
    });
}
function getWordList() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!wordData)
            yield fetchWordlist();
        return wordData;
    });
}
module.exports = getWordList;
