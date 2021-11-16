import type { IAlphaItem } from "./table";
import { table } from "./table";

import { Syllable } from "./syllable";

export class Alphabet {
  private _table: IAlphaItem[] = [];
  private _volwes: string[] = [];
  constructor() {
    this._table = table;
    this._table.forEach((item) => item.volwes && this._volwes.push(item.uchar));
  }
  getTable() {
    return this._table;
  }
  getVolwes() {
    return this._volwes;
  }
  isVolwes(char: string) {
    return this._volwes.includes(char);
  }

  syllable(word: string) {
    return new Syllable().syllable(word);
  }
}
