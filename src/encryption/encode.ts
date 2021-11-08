import { sMap } from "./encrypt-map";

export function encode(word: string) {
  return Array.from(word)
    .map((item) => sMap[item] || item)
    .join("");
}
