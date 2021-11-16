export interface IAlphaItem {
  uchar: string;
  volwes: boolean;
  uly: string;
  khan: string;
}

export const BOUND_FLAG = String.fromCharCode(0x0000);

export const HEMZE = "ئ‍";
export const table: IAlphaItem[] = [
  {
    uchar: "ئ",
    volwes: false,
    uly: BOUND_FLAG,
    khan: "?",
  },
  {
    uchar: "ا",
    volwes: true,
    uly: "a",
    khan: "a",
  },
  {
    uchar: "ە",
    volwes: true,
    uly: "e",
    khan: "e",
  },
  {
    uchar: "ې",
    volwes: true,
    uly: "ë",
    khan: "eh",
  },
  {
    uchar: "ى",
    volwes: true,
    uly: "i",
    khan: "i",
  },
  {
    uchar: "و",
    volwes: true,
    uly: "o",
    khan: "o",
  },
  {
    uchar: "ۇ",
    volwes: true,
    uly: "u",
    khan: "u",
  },
  {
    uchar: "ۆ",
    volwes: true,
    uly: "ö",
    khan: "c",
  },
  {
    uchar: "ۈ",
    volwes: true,
    uly: "ü",
    khan: "v",
  },
  {
    uchar: "ب",
    volwes: false,
    uly: "b",
    khan: "b",
  },
  {
    uchar: "پ",
    volwes: false,
    uly: "p",
    khan: "p",
  },
  {
    uchar: "ت",
    volwes: false,
    uly: "t",
    khan: "t",
  },
  {
    uchar: "ج",
    volwes: false,
    uly: "j",
    khan: "j",
  },
  {
    uchar: "چ",
    volwes: false,
    uly: "ch",
    khan: "ch",
  },
  {
    uchar: "خ",
    volwes: false,
    uly: "x",
    khan: "kh",
  },
  {
    uchar: "د",
    volwes: false,
    uly: "d",
    khan: "d",
  },
  {
    uchar: "ر",
    volwes: false,
    uly: "r",
    khan: "r",
  },
  {
    uchar: "ز",
    volwes: false,
    uly: "z",
    khan: "z",
  },
  {
    uchar: "ژ",
    volwes: false,
    uly: "zh",
    khan: "zh",
  },
  {
    uchar: "س",
    volwes: false,
    uly: "s",
    khan: "s",
  },
  {
    uchar: "ش",
    volwes: false,
    uly: "sh",
    khan: "sh",
  },
  {
    uchar: "غ",
    volwes: false,
    uly: "gh",
    khan: "gh",
  },
  {
    uchar: "ق",
    volwes: false,
    uly: "q",
    khan: "q",
  },
  {
    uchar: "ف",
    volwes: false,
    uly: "f",
    khan: "f",
  },
  {
    uchar: "ك",
    volwes: false,
    uly: "k",
    khan: "k",
  },
  {
    uchar: "گ",
    volwes: false,
    uly: "g",
    khan: "g",
  },
  {
    uchar: "ڭ",
    volwes: false,
    uly: "ng",
    khan: "ng",
  },
  {
    uchar: "ل",
    volwes: false,
    uly: "l",
    khan: "l",
  },
  {
    uchar: "م",
    volwes: false,
    uly: "m",
    khan: "m",
  },
  {
    uchar: "ن",
    volwes: false,
    uly: "n",
    khan: "n",
  },
  {
    uchar: "ھ",
    volwes: false,
    uly: "h",
    khan: "x",
  },
  {
    uchar: "ۋ",
    volwes: false,
    uly: "w",
    khan: "w",
  },
  {
    uchar: "ي",
    volwes: false,
    uly: "y",
    khan: "y",
  },
];
