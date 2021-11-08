import { decode } from "./decode";

const source = "g2aowbb2cl2p2l2pel";
const res = "شىرخاننىڭكىدىكىدەك";

describe("测试 decode 功能", () => {
  test("decode", () => {
    expect(decode(source)).toEqual(res);
  });
});
