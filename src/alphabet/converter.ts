import { table, HEMZE } from "shirkhan-alphabet-table";
import { KhanConverter, UlyConverter } from "shirkhan-alphabet-converter";

export * from "shirkhan-alphabet-converter";

const khan = new KhanConverter(table as any, HEMZE);
export function ug2khan(word: string) {
  return khan.fromUg(word);
}
export function khan2ug(word: string) {
  return khan.toUg(word);
}
export function khanText2ug(text: string) {
  return khan.toUgText(text);
}

const uly = new UlyConverter(table as any, HEMZE);

export function ug2uly(word: string) {
  return uly.fromUg(word);
}
export function uly2ug(word: string) {
  return uly.toUg(word);
}
export function ulyText2ug(text: string) {
  return uly.toUgText(text);
}
