import Letter from "./letter";
export default class Alphabet {
  /**
   * shirkhan 和uighur 字母映射表
   * arr[0] shirkhan char
   * arr[1] uighur char
   * arr[2] is Sozuq
   * arr[3] is special  //需要考虑组合字母的特殊字母
   */
  static s2uMap = [
    ["ii", "ئ", 1, 0],
    ["a", "ا", 1, 0],
    ["e", "ە", 1, 0],
    ["ei", "ې", 1, 0],
    ["i", "ى", 1, 1],
    ["o", "و", 1, 0],
    ["u", "ۇ", 1, 0],
    ["c", "ۆ", 1, 0],
    ["v", "ۈ", 1, 0],
    ["b", "ب", 0, 0],
    ["d", "د", 0, 0],
    ["g", "گ", 0, 1],
    ["j", "ج", 0, 0],
    ["l", "ل", 0, 0],
    ["m", "م", 0, 0],
    ["n", "ن", 0, 0],
    ["r", "ر", 0, 0],
    ["w", "ۋ", 0, 0],
    ["y", "ي", 0, 0],
    ["z", "ز", 0, 0],
    ["gh", "غ", 0, 0],
    ["rh", "ژ", 0, 0],
    ["ng", "ڭ", 0, 0],
    ["h", "ھ", 0, 1],
    ["p", "پ", 0, 0],
    ["t", "ت", 0, 0],
    ["ch", "چ", 0, 0],
    ["s", "س", 0, 0],
    ["kh", "خ", 0, 0],
    ["x", "ش", 0, 0],
    ["f", "ف", 0, 0],
    ["q", "ق", 0, 0],
    ["k", "ك", 0, 0],
  ];

  // Letter类的实例集
  letters = [];

  constructor() {
    Alphabet.s2uMap.forEach(
      ([shirkhanChar, uighurChar, isSozuq, isSpecialChar]) => {
        this.letters.push(
          new Letter(
            shirkhanChar,
            uighurChar,
            (isSozuq && true) || false,
            (isSpecialChar && true) || false
          )
        );
      }
    );
  }

  /**
   *
   * @param {string} char
   * @returns {Letter | undefined}
   */
  getLetter(char) {
    return this.letters.find(
      (item) => item.uighurChar === char || item.shirkhanChar === char
    );
  }
}
