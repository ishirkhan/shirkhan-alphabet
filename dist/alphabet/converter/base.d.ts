import { Alphabet } from "..";
import { IAlphaItem } from "../table";
import { Contract, ConvertType } from "./contract";
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
