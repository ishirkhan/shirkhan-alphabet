import { U_Khan as ukConverter } from "./u-khan";
import { U_Uly as uuConverter } from "./u-uly";

export function u2uly(word: string) {
  return new uuConverter().toUly(word);
}
export function uly2u(word: string) {
  return new uuConverter().toU(word);
}

export function u2khan(word: string) {
  return new ukConverter().toKhan(word);
}
export function khan2u(word: string) {
  return new ukConverter().toU(word);
}
