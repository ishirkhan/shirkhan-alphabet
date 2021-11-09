import type { IAlphaItem } from "./table";
import { table } from "./table";

import { Syllable } from "./syllable";

export class Alphabet {
  private _table: IAlphaItem[];
  constructor() {
    this._table = table;
  }
  getTable() {
    return this._table;
  }

  syllable(word: string) {
    return new Syllable().syllable(word);
  }
}
