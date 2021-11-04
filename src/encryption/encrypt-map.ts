export interface IEncryptMap {
  schar: string;
  tchar: string;
}
const EncryptMap: IEncryptMap[] = [
  {
    schar: "ئ",
    tchar: "q",
  },
  {
    schar: "ا",
    tchar: "w",
  },
  {
    schar: "ە",
    tchar: "e",
  },
  {
    schar: "ب",
    tchar: "r",
  },
  {
    schar: "پ",
    tchar: "t",
  },
  {
    schar: "ت",
    tchar: "y",
  },
  {
    schar: "ج",
    tchar: "u",
  },
  {
    schar: "چ",
    tchar: "i",
  },
  {
    schar: "خ",
    tchar: "o",
  },
  {
    schar: "د",
    tchar: "p",
  },
  {
    schar: "ر",
    tchar: "a",
  },
  {
    schar: "ز",
    tchar: "s",
  },
  {
    schar: "ژ",
    tchar: "d",
  },
  {
    schar: "س",
    tchar: "f",
  },
  {
    schar: "ش",
    tchar: "g",
  },
  {
    schar: "غ",
    tchar: "h",
  },
  {
    schar: "ف",
    tchar: "j",
  },
  {
    schar: "ق",
    tchar: "k",
  },
  {
    schar: "ك",
    tchar: "l",
  },
  {
    schar: "گ",
    tchar: "z",
  },
  {
    schar: "ل",
    tchar: "x",
  },
  {
    schar: "ڭ",
    tchar: "c",
  },
  {
    schar: "م",
    tchar: "v",
  },
  {
    schar: "ن",
    tchar: "b",
  },
  {
    schar: "ھ",
    tchar: "n",
  },
  {
    schar: "و",
    tchar: "m",
  },
  {
    schar: "ۇ",
    tchar: "7",
  },
  {
    schar: "ۆ",
    tchar: "6",
  },
  {
    schar: "ۈ",
    tchar: "5",
  },
  {
    schar: "ۋ",
    tchar: "4",
  },
  {
    schar: "ې",
    tchar: "3",
  },
  {
    schar: "ى",
    tchar: "2",
  },
  {
    schar: "ي",
    tchar: "1",
  },
];

const sMap: { [k: string]: string } = {};
const tMap: { [k: string]: string } = {};
EncryptMap.forEach((item) => {
  sMap[item.schar] = item.tchar;
  tMap[item.tchar] = item.schar;
});

export { sMap, tMap };
