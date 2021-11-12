import { Khan } from "./khan";

const khan = new Khan();
const uStr = "شىرخاننىڭكىدىكىدەك";
const khanStr = "shirkhanningkidikidek";

describe("测试 khan 转换功能", () => {
  test("母语转换 khan", () => {
    const res = khan.convert(uStr);
    expect(res).toEqual(khanStr);
  });

  test("khan 换回母语", () => {
    const res = khan.forward(khanStr);
    expect(res).toEqual(uStr);
  });
});
