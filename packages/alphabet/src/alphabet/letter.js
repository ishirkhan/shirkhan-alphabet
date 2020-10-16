export default class Letter {
  uighurChar = ""; // 对应维吾尔文字母
  shirkhanChar = ""; //对应shirkhan字母表中的字母
  isSozuq = false; //是否Sozuq tawush
  isSpecialChar = false; // 是否在shirkhan字母表中对应 >=2个字母

  constructor(
    shirkhanChar = "",
    uighurChar = "",
    isSozuq = false,
    isSpecialChar = false
  ) {
    this.shirkhanChar = shirkhanChar;
    this.uighurChar = uighurChar;
    this.isSozuq = isSozuq;
    this.isSpecialChar = isSpecialChar;
  }
}
