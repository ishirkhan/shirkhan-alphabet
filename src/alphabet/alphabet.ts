import type { ITableItem } from "shirkhan-alphabet-table";
import table from "shirkhan-alphabet-table";
import Syllable from "shirkhan-alphabet-syllable";
import { KhanConverter, UlyConverter } from "shirkhan-alphabet-converter";

export class Alphabet {
  private _table: ITableItem[] = [];
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

  khanConverter() {
    return new KhanConverter();
  }

  toKhan(uword: string) {
    return this.khanConverter().convert(uword);
  }

  fromKhan(khanWord: string) {
    return this.khanConverter().forward(khanWord);
  }

  ulyConverter() {
    return new UlyConverter();
  }

  toUly(uword: string) {
    return this.ulyConverter().convert(uword);
  }
}
