import { Alphabet } from "..";

export class U_Uly {
  alphabet = new Alphabet();

  toUly(word: string) {
    // 生成key-value
    const uMap: { [k: string]: string } = {};
    this.alphabet.getTable().forEach((item) => (uMap[item.uchar] = item.uly));

    // 转换
    return Array.from(word)
      .map((item) => uMap[item] || item)
      .join("");
  }
  toU(word: string) {
    /**
     * 备注:
     * 反向转换时需要从最长的组合开始替换，不然组合字符将被识别成2个字符，这回导致结果错误
     * 比如: shirkhan -> sh kh i r a n 类似于这种顺序
     */
    const table = this.alphabet.getTable();

    /**
     * 1. 排序
     * 2. 最长组合开始替换单词中的字符
     */
    table
      .sort((a, b) => b.uly.length - a.uly.length)
      .forEach((item) => {
        word = word.replaceAll(item.uly, item.uchar);
      });

    return word;
  }
}
