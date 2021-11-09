import { Alphabet } from "./alphabet";

const alpha = new Alphabet();

describe("测试 Alphabet 功能", () => {
  test("单词 分音节功能", () => {
    const targets = [
      {
        source: "ئادەم",
        sybale: ["ئا", "دەم"],
      },
      {
        source: "ئادەملەردە",
        sybale: ["ئا", "دەم", "لەر", "دە"],
      },
      {
        source: "كىشىلەرنىڭكىدە",
        sybale: ["كى", "شى", "لەر", "نىڭ", "كى", "دە"],
      },
    ];
    targets.forEach(({ source, sybale }) => {
      expect(alpha.syllable(source)).toEqual(sybale);
    });
  });
});
