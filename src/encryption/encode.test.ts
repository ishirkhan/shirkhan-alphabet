import { encode } from "./encode";

const source = "شىرخاننىڭكىدىكىدەك";
const res = "g2aowbb2cl2p2l2pel";

describe("测试 encode 功能", () => {
  test("encode", () => {
    expect(encode(source)).toEqual(res);
  });
});
