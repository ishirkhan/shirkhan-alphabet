import type { IAlphaItem } from "./table";
import { table } from "./table";

export class Alphabet {
  private _table: IAlphaItem[];
  constructor() {
    this._table = table;
  }
  getTable() {
    return this._table;
  }
}
