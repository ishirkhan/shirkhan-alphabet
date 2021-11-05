import { Alphabet } from "..";
import { IAlphaItem } from "../table";
import { Contract, ConvertType } from "./contract";

export class Base implements Contract {
  type!: ConvertType;
  alphabet = new Alphabet();

  orderedTable(): IAlphaItem[] {
    return this.alphabet.getTable().sort((a: any, b: any) => {
      return b[this.type]?.length - a[this.type]?.length;
    });
  }

  getMap(): { [k: string]: string } {
    const kvmap: { [k: string]: string } = {};
    this.orderedTable().forEach((item) => {
      kvmap[item[this.type]] = item.uchar;
    });
    return kvmap;
  }

  convert(uword: string): string {
    Object.entries(this.getMap()).forEach(([key, value]) => {
      uword = uword.replaceAll(value, key);
    });

    return uword;
  }

  forward(word: string): string {
    Object.entries(this.getMap()).forEach(([key, value]) => {
      word = word.replaceAll(key, value);
    });
    return word;
  }
}
