import type { IAlphaItem } from "../table";
/**
- 规则
  - 两个元音之间有1个辅音它属于前面的音节
  - 两个元音之间有2个辅音它一个属于前面的，一个属于后面的
  - 两个元音之间有3个辅音 第一个属于前面的，后两个属于后面的
  - 两个元音之间有4个辅音 第一个属于前面的，其后的两个一组，最后一个属于后面的   【shirkhan 给自己出的规则，目前没有任何凭据这么做，而且是不对的】
  - 两个元音之间有5个辅音 第一个属于前面的，其后的三个一组，最后一个属于后面的   【shirkhan 给自己出的规则，目前没有任何凭据这么做，而且是不对的】

 */
export declare class Syllable {
    private _table;
    constructor();
    getTable(): IAlphaItem[];
    tokenize(word: string): string;
    tokenToGroup(token: string): string[];
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
    groupToPositional(group: string[]): string[];
    positinalGroupToWord(positinalGroup: string[], word: string): string[];
    /**
  
     * @param word
     */
    syllable(word: string): string[];
}
