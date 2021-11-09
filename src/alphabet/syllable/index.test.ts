import { Syllable } from ".";

const syllable = new Syllable();

describe("测试 syllablebet 功能", () => {
  test("tokenize 功能", () => {
    const targets = [
      {
        source: "ئادەم",
        result: "01010",
      },
      {
        source: "ئادەملەردە",
        result: "0101001001",
      },
      {
        source: "كىشىلەرنىڭكىدە",
        result: "01010100100101",
      },
    ];
    targets.forEach(({ source, result }) => {
      expect(syllable.tokenize(source)).toEqual(result);
    });
  });

  test("tokenToGroup 功能", () => {
    const targets = [
      {
        source: "01010",
        result: ["01", "01", "0"],
      },
      {
        source: "0101001001",
        result: ["01", "01", "001", "001", ""],
      },
      {
        source: "01010100100101",
        result: ["01", "01", "01", "001", "001", "01", ""],
      },
    ];
    targets.forEach(({ source, result }) => {
      expect(syllable.tokenToGroup(source)).toEqual(result);
    });
  });

  test("groupToPositional 功能", () => {
    const targets = [
      {
        source: ["01", "01", "0"],
        result: ["01", "#01", "0"],
      },
      {
        source: ["01", "01", "001", "001", ""],
        result: ["01", "#01", "0#01", "0#01", ""],
      },
      {
        source: ["01", "01", "01", "001", "001", "01", ""],
        result: ["01", "#01", "#01", "0#01", "0#01", "#01", ""],
      },
    ];
    targets.forEach(({ source, result }) => {
      expect(syllable.groupToPositional(source)).toEqual(result);
    });
  });

  test("syllable 功能", () => {
    const targets = [
      {
        source: "ئادەم",
        result: ["ئا", "دەم"],
      },
      {
        source: "ئادەملەردە",
        result: ["ئا", "دەم", "لەر", "دە"],
      },
      {
        source: "كىشىلەرنىڭكىدە",
        result: ["كى", "شى", "لەر", "نىڭ", "كى", "دە"],
      },
    ];
    targets.forEach(({ source, result }) => {
      expect(syllable.syllable(source)).toEqual(result);
    });
  });
});
