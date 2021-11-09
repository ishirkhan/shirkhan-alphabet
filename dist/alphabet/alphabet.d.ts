import type { IAlphaItem } from "./table";
export declare class Alphabet {
    private _table;
    constructor();
    getTable(): IAlphaItem[];
    syllable(word: string): string[];
}
