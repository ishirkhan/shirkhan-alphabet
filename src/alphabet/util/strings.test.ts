import { textToWords } from "./string";

describe("测试 strings 工具之 textToWords 功能", () => {
  test("单词 分音节功能", () => {
    const targets = [
      {
        source:
          "مەزمۇن ئىچىگە ئارلىشىپ كەلگەن  中文 English  قاتارلىق ئانا تىلغا تەۋە بولىغان مەزمۇنلارنىڭ ھەممىسى چىقىرىلىۋېتىدۇ",
        result: [
          "مەزمۇن",
          "ئىچىگە",
          "ئارلىشىپ",
          "كەلگەن",
          "قاتارلىق",
          "ئانا",
          "تىلغا",
          "تەۋە",
          "بولىغان",
          "مەزمۇنلارنىڭ",
          "ھەممىسى",
          "چىقىرىلىۋېتىدۇ",
        ],
      },
    ];
    targets.forEach(({ source, result }) => {
      expect(textToWords(source)).toEqual(result);
    });
  });
});
