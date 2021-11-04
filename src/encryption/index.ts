import { sMap, tMap } from "./encrypt-map";

export function encode(word: string) {
  return Array.from(word)
    .map((item) => sMap[item] || item)
    .join("");
}

export function decode(word: string) {
  return Array.from(word)
    .map((item) => tMap[item] || item)
    .join("");
}
