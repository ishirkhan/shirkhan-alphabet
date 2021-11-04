var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const table = [
  {
    uchar: "\u0626",
    volwes: false,
    uly: "" + 0,
    khan: "?"
  },
  {
    uchar: "\u0627",
    volwes: true,
    uly: "a",
    khan: "a"
  },
  {
    uchar: "\u06D5",
    volwes: true,
    uly: "e",
    khan: "e"
  },
  {
    uchar: "\u06D0",
    volwes: true,
    uly: "\xEB",
    khan: "e'"
  },
  {
    uchar: "\u0649",
    volwes: true,
    uly: "i",
    khan: "i"
  },
  {
    uchar: "\u0648",
    volwes: true,
    uly: "o",
    khan: "o"
  },
  {
    uchar: "\u06C7",
    volwes: true,
    uly: "u",
    khan: "u"
  },
  {
    uchar: "\u06C6",
    volwes: true,
    uly: "\xF6",
    khan: "c"
  },
  {
    uchar: "\u06C8",
    volwes: true,
    uly: "\xFC",
    khan: "v"
  },
  {
    uchar: "\u0628",
    volwes: false,
    uly: "b",
    khan: "b"
  },
  {
    uchar: "\u067E",
    volwes: false,
    uly: "p",
    khan: "p"
  },
  {
    uchar: "\u062A",
    volwes: false,
    uly: "t",
    khan: "t"
  },
  {
    uchar: "\u062C",
    volwes: false,
    uly: "j",
    khan: "j"
  },
  {
    uchar: "\u0686",
    volwes: false,
    uly: "ch" + 0,
    khan: "c'"
  },
  {
    uchar: "\u062E",
    volwes: false,
    uly: "x",
    khan: "k'"
  },
  {
    uchar: "\u062F",
    volwes: false,
    uly: "d",
    khan: "d"
  },
  {
    uchar: "\u0631",
    volwes: false,
    uly: "r",
    khan: "r"
  },
  {
    uchar: "\u0632",
    volwes: false,
    uly: "z",
    khan: "z"
  },
  {
    uchar: "\u0698",
    volwes: false,
    uly: "zh" + 0,
    khan: "z'"
  },
  {
    uchar: "\u0633",
    volwes: false,
    uly: "s",
    khan: "s"
  },
  {
    uchar: "\u0634",
    volwes: false,
    uly: "sh" + 0,
    khan: "x"
  },
  {
    uchar: "\u063A",
    volwes: false,
    uly: "gh" + 0,
    khan: "g'"
  },
  {
    uchar: "\u0642",
    volwes: false,
    uly: "q",
    khan: "q"
  },
  {
    uchar: "\u0641",
    volwes: false,
    uly: "f",
    khan: "f"
  },
  {
    uchar: "\u0643",
    volwes: false,
    uly: "k",
    khan: "k"
  },
  {
    uchar: "\u06AF",
    volwes: false,
    uly: "g",
    khan: "g"
  },
  {
    uchar: "\u06AD",
    volwes: false,
    uly: "ng" + 0,
    khan: "n'"
  },
  {
    uchar: "\u0644",
    volwes: false,
    uly: "l",
    khan: "l"
  },
  {
    uchar: "\u0645",
    volwes: false,
    uly: "m",
    khan: "m"
  },
  {
    uchar: "\u0646",
    volwes: false,
    uly: "n",
    khan: "n"
  },
  {
    uchar: "\u06BE",
    volwes: false,
    uly: "h",
    khan: "h"
  },
  {
    uchar: "\u06CB",
    volwes: false,
    uly: "w",
    khan: "w"
  },
  {
    uchar: "\u064A",
    volwes: false,
    uly: "y",
    khan: "y"
  }
];
class Alphabet {
  constructor() {
    __publicField(this, "_table");
    this._table = table;
  }
  getTable() {
    return this._table;
  }
}
const EncryptMap = [
  {
    schar: "\u0626",
    tchar: "q"
  },
  {
    schar: "\u0627",
    tchar: "w"
  },
  {
    schar: "\u06D5",
    tchar: "e"
  },
  {
    schar: "\u0628",
    tchar: "r"
  },
  {
    schar: "\u067E",
    tchar: "t"
  },
  {
    schar: "\u062A",
    tchar: "y"
  },
  {
    schar: "\u062C",
    tchar: "u"
  },
  {
    schar: "\u0686",
    tchar: "i"
  },
  {
    schar: "\u062E",
    tchar: "o"
  },
  {
    schar: "\u062F",
    tchar: "p"
  },
  {
    schar: "\u0631",
    tchar: "a"
  },
  {
    schar: "\u0632",
    tchar: "s"
  },
  {
    schar: "\u0698",
    tchar: "d"
  },
  {
    schar: "\u0633",
    tchar: "f"
  },
  {
    schar: "\u0634",
    tchar: "g"
  },
  {
    schar: "\u063A",
    tchar: "h"
  },
  {
    schar: "\u0641",
    tchar: "j"
  },
  {
    schar: "\u0642",
    tchar: "k"
  },
  {
    schar: "\u0643",
    tchar: "l"
  },
  {
    schar: "\u06AF",
    tchar: "z"
  },
  {
    schar: "\u0644",
    tchar: "x"
  },
  {
    schar: "\u06AD",
    tchar: "c"
  },
  {
    schar: "\u0645",
    tchar: "v"
  },
  {
    schar: "\u0646",
    tchar: "b"
  },
  {
    schar: "\u06BE",
    tchar: "n"
  },
  {
    schar: "\u0648",
    tchar: "m"
  },
  {
    schar: "\u06C7",
    tchar: "7"
  },
  {
    schar: "\u06C6",
    tchar: "6"
  },
  {
    schar: "\u06C8",
    tchar: "5"
  },
  {
    schar: "\u06CB",
    tchar: "4"
  },
  {
    schar: "\u06D0",
    tchar: "3"
  },
  {
    schar: "\u0649",
    tchar: "2"
  },
  {
    schar: "\u064A",
    tchar: "1"
  }
];
const sMap = {};
const tMap = {};
EncryptMap.forEach((item) => {
  sMap[item.schar] = item.tchar;
  tMap[item.tchar] = item.schar;
});
function encode(word) {
  return Array.from(word).map((item) => sMap[item] || item).join("");
}
function decode(word) {
  return Array.from(word).map((item) => tMap[item] || item).join("");
}
export { Alphabet, decode, encode };
