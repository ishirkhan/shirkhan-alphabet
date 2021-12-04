import ugSyllable from "shirkhan-alphabet-syllable";

export { ugSyllable };
export * from "shirkhan-alphabet-syllable";

export function syllableUg(word: string) {
  return new ugSyllable().syllable(word);
}
