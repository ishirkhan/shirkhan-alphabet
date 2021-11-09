import { Alphabet } from "../alphabet";
import type { IAlphaItem } from "../table";
import { Contract } from "./contract";
import type { ConvertType } from "./contract";
export declare class Base implements Contract {
    type: ConvertType;
    alphabet: Alphabet;
    orderedTable(): IAlphaItem[];
    getMap(): {
        [k: string]: string;
    };
    convert(uword: string): string;
    forward(word: string): string;
}
