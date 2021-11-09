import type { IAlphaItem } from "../table";
import { table } from "../table";

/**
- 规则
  - 两个元音之间有1个辅音它属于前面的音节
  - 两个元音之间有2个辅音它一个属于前面的，一个属于后面的
  - 两个元音之间有3个辅音 第一个属于前面的，后两个属于后面的
  - 两个元音之间有4个辅音 第一个属于前面的，其后的两个一组，最后一个属于后面的   【shirkhan 给自己出的规则，目前没有任何凭据这么做，而且是不对的】
  - 两个元音之间有5个辅音 第一个属于前面的，其后的三个一组，最后一个属于后面的   【shirkhan 给自己出的规则，目前没有任何凭据这么做，而且是不对的】

 */
export class Syllable {
  private _table: IAlphaItem[];

  constructor() {
    this._table = table;
  }

  getTable() {
    return this._table;
  }

  tokenize(word: string) {
    const volwes = this._table
      .filter((item) => item.volwes)
      .map((item) => item.uchar);
    return word
      .split("")
      .map((char) => (volwes.indexOf(char) !== -1 ? 1 : 0))
      .join("");
  }

  tokenToGroup(token: string) {
    return token.replaceAll("1", "1#").split("#");
  }

  /**
   - 规则
      - 两个元音之间有1个辅音它属于前面的音节
      - 两个元音之间有2个辅音它一个属于前面的，一个属于后面的
      - 两个元音之间有3个辅音 第一个属于前面的，后两个属于后面的
      - 两个元音之间有4个辅音 第一个属于前面的，其后的两个一组，最后一个属于后面的   【shirkhan 给自己出的规则，目前没有任何凭据这么做，而且是不对的】
      - 两个元音之间有5个辅音 第一个属于前面的，其后的三个一组，最后一个属于后面的   【shirkhan 给自己出的规则，目前没有任何凭据这么做，而且是不对的】
   * @param group
   * @returns
   */
  groupToPositional(group: string[]) {
    // 这里为了方便处理余生音节，我们采用从后往前分析
    return group
      .reverse()
      .map((item, index) => {
        if (index === 0 || index === group.length - 1) return item;
        switch (item.replace("1", "").length) {
          case 1:
            return "#" + item;
            break;
          case 2:
            return [item[0], "#", item.slice(1, 3)].join("");
            break;
          case 3:
            return [item[0], "#", item.slice(1, 3), item.slice(-1)].join("");
            break;
          case 4:
            return [item[0], "#", item.slice(1, 3), "#", item.slice(-1)].join(
              ""
            );
            break;
          case 5:
            return [item[0], "#", item.slice(1, 4), "#", item.slice(-1)].join(
              ""
            );
            break;
          default:
            return item;
            break;
        }
      })
      .reverse();
  }
  positinalGroupToWord(positinalGroup: string[], word: string) {
    const syllableList: string[] = [];
    let counter = 0;
    positinalGroup
      .join("")
      .split("")
      .forEach((item, index) => {
        if (item === "#") {
          counter += 1;
          syllableList.push("#");
          return;
        }
        syllableList.push(word[index - counter]);
      });
    return syllableList.join("").split("#");
  }

  /**

   * @param word
   */
  syllable(word: string) {
    /**
     * 思路:
     * - 先把内容转换成010101，元音为1，辅音为0，Hemze看成0
     * - 通过 “1”值分组，分析分音节点植入符号占位
     * - 通过token上植入的符号位在单词上也植入实现分音节
     */
    const token = this.tokenize(word);
    let group = this.tokenToGroup(token);
    const positionalGroup = this.groupToPositional(group);
    const sylableWord = this.positinalGroupToWord(positionalGroup, word);
    return sylableWord;
  }
}

// function test(word: string) {
//   console.group("word:", word);
//   const token = syllable.tokenize(word);
//   console.log("token", token);

//   const group = syllable.tokenToGroup(token);
//   console.log("group", group);

//   const gpsitional = syllable.groupToPositional(group);
//   console.log("gpsitional", gpsitional);

//   const sylableWord = syllable.positinalGroupToWord(gpsitional, word);
//   console.log("sylableWord", sylableWord);

//   console.groupEnd();
// }

// const syllable = new Syllable();

// test("ئادەم");
// test("ئادەملەردە");
// test("كىشىلەرنىڭكىدە");
