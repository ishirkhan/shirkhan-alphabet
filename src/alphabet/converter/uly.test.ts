import { Uly } from "./uly";

const uly = new Uly();

const uStr = "شىرخاننېڭكىدىكىدەك";
const ulyStr = "shirxannëngkidikidek";

describe("测试 uly 转换功能", () => {
  test("母语转换 uly", () => {
    const res = uly.convert(uStr);
    expect(res).toEqual(ulyStr);
  });

  test("uly 换回母语", () => {
    const res = uly.forward(ulyStr);
    expect(res).toEqual(uStr);
  });
});
