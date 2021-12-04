import type { ITableItem } from "shirkhan-alphabet-table";
export * from "shirkhan-alphabet-table";
export declare function volwes(): ITableItem[];
export declare function isVolwes(char: string, key?: keyof Pick<ITableItem, "khan" | "ug" | "uly">): boolean;
