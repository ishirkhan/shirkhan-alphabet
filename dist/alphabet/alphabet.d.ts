import type { ITableItem } from "shirkhan-alphabet-table";
import { KhanConverter, UlyConverter } from "shirkhan-alphabet-converter";
export declare class Alphabet {
    private _table;
    private _volwes;
    constructor();
    getTable(): ITableItem[];
    getVolwes(): string[];
    isVolwes(char: string): boolean;
    syllable(word: string): string[];
    khanConverter(): KhanConverter;
    toKhan(uword: string): string;
    fromKhan(khanWord: string): string;
    ulyConverter(): UlyConverter;
    toUly(uword: string): string;
}
