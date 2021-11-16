import type { IAlphaItem } from "./table";
export declare class Alphabet {
    private _table;
    private _volwes;
    constructor();
    getTable(): IAlphaItem[];
    getVolwes(): string[];
    isVolwes(char: string): boolean;
    syllable(word: string): string[];
}
