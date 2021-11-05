import { Alphabet } from "..";
import type { IAlphaItem } from "../table";
export declare type ConvertType = keyof Pick<IAlphaItem, "khan" | "uchar" | "uly">;
export interface Contract {
    alphabet: Alphabet;
    type: ConvertType;
    /**
     * 长度大到小排序的table
     * 备注:
     * 反向转换时需要从最长的组合开始替换，不然组合字符将被识别成2个字符，这回导致结果错误
     * 比如: shirkhan -> sh kh i r a n 类似于这种顺序
     */
    orderedTable(): IAlphaItem[];
    /**
     * 当前type类型的field 对应母语的 keyvalue map
     */
    getMap(): {
        [k: string]: string;
    };
    /**
     * 吧母语内容转换成当前主导的形式
     * @param uword
     */
    convert(uword: string): string;
    /**
     * 当前主导形式的内容转换成母语
     * @param word
     */
    forward(word: string): string;
}
