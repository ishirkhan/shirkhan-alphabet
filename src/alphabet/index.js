import Letter from "./letter";
export default class Alphabet {
  /**
   * shirkhan 和uighur 字母映射表
   * arr[0] shirkhan char
   * arr[1] uighur char
   * arr[2] is Sozuq
   */
  static s2uMap = [
    ["ii", "ئ", 1],
    ["a", "ا", 1],
    ["e", "ە", 1],
    ["ei", "ې", 1],
    ["i", "ى", 1],
    ["o", "و", 1],
    ["u", "ۇ", 1],
    ["ov", "ۆ", 1],
    ["v", "ۈ", 1],
    ["b", "ب", 0],
    ["d", "د", 0],
    ["g", "گ", 0],
    ["j", "ج", 0],
    ["l", "ل", 0],
    ["m", "م", 0],
    ["n", "ن", 0],
    ["r", "ر", 0],
    ["w", "ۋ", 0],
    ["y", "ي", 0],
    ["z", "ز", 0],
    ["gh", "غ", 0],
    ["rh", "ژ", 0],
    ["ng", "ڭ", 0],
    ["h", "ھ", 0],
    ["p", "پ", 0],
    ["t", "ت", 0],
    ["ch", "چ", 0],
    ["s", "س", 0],
    ["kh", "خ", 0],
    ["x", "ش", 0],
    ["f", "ف", 0],
    ["q", "ق", 0],
    ["k", "ك", 0],
  ];

  // Letter类的实例集
  letters = [];

  constructor() {
    Alphabet.s2uMap.forEach(([shirkhanChar, uighurChar, isSozuq]) => {
      this.letters.push(
        new Letter(shirkhanChar, uighurChar, (isSozuq && true) || false)
      );
    });
    console.log(this.letters);
  }
}
