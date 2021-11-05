import { Khan } from "./khan";

const khan = new Khan();
test("khan 转换器测试", () => {
  expect(khan.type).toEqual("khan2");
});
