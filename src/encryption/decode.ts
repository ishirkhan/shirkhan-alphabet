import { tMap } from "./encrypt-map";

export function decode(word: string) {
  return Array.from(word)
    .map((item) => tMap[item] || item)
    .join("");
}
