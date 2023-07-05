// This monstrosity lazy loads my fat ass array

const data: string[] = require("./wordlist");

let wordData: string[] | null = null;

async function fetchWordlist(): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      wordData = data;
      resolve();
    }, 1000);
  });
}

async function getWordList(): Promise<string[]> {
  if (!wordData) await fetchWordlist();
  return wordData!;
}

export = getWordList;
