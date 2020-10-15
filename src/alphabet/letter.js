export default class Letter {
  uighurChar = ""; // 对应维吾尔文字母
  shirkhanChar = ""; //对应shirkhan字母表中的字母
  isSozuq = false; //是否Sozuq tawush
  isMultiChar = false; // 是否在shirkhan字母表中对应 >=2个字母

  constructor(shirkhanChar = "", uighurChar = "", isSozuq = false) {
    this.shirkhanChar = shirkhanChar;
    this.uighurChar = uighurChar;
    this.isMultiChar = shirkhanChar.length >= 2 ? true : false;
    this.isSozuq = isSozuq;
  }
}
