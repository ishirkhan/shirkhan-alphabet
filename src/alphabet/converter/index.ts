import { U_Khan as ukConverter } from "./khan";
import { U_Uly as uuConverter } from "./uly";

export function u2uly(word: string) {
  return new uuConverter().convert(word);
}

export function uly2u(word: string) {
  return new uuConverter().forward(word);
}

export function u2khan(word: string) {
  return new ukConverter().convert(word);
}

export function khan2u(word: string) {
  return new ukConverter().forward(word);
}
