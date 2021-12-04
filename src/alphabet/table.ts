import { table } from "shirkhan-alphabet-table";
import type { ITableItem } from "shirkhan-alphabet-table";

export * from "shirkhan-alphabet-table";

export function volwes() {
  return table.filter((item) => item.volwes);
}
export function isVolwes(
  char: string,
  key: keyof Pick<ITableItem, "khan" | "ug" | "uly"> = "khan"
) {
  return volwes()
    .map((item) => item[key])
    .includes(char);
}
