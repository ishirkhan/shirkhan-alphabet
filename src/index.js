const uighurAlphabet =
  "ئا ئە ئې ئى ئو ئۇ ئۆ ئۈ ب د گ ج ل  م ن ر ۋ ي ز غ ژ ڭ ھ  پ ت چ س خ ش ف ق ك";

//sozuq 8 jarangliq 24  jarangsiz
const u2sMap = {
  ئ: "ii",

  ا: "a",
  ە: "e",
  ې: "ei",
  ى: "i",
  و: "o",
  ۇ: "u",
  ۆ: "ov",
  ۈ: "oi",

  ب: "b",
  د: "d",
  گ: "g",
  ج: "j",
  ل: "l",
  م: "m",
  ن: "n",
  ر: "r",
  ۋ: "w",
  ي: "y",
  ز: "z",
  غ: "gh",
  ژ: "rh",
  ڭ: "ng",
  ھ: "h",

  پ: "p",
  ت: "t",
  چ: "ch",
  س: "s",
  خ: "kh",
  ش: "x",
  ف: "f",
  ق: "q",
  ك: "k",
};

const s2uMap = {
  ic: "ئ",

  a: "ا",
  e: "ە",
  ei: "ې",
  i: "ى",
  o: "و",
  u: "ۇ",
  ov: "ۆ",
  oi: "ۈ",

  b: "ب",
  d: "د",
  g: "گ",
  j: "ج",
  l: "ل",
  m: "م",
  n: "ن",
  r: "ر",
  w: "ۋ",
  y: "ي",
  z: "ز",
  gh: "غ",
  rh: "ژ",
  ng: "ڭ",
  h: "ھ",

  p: "پ",
  t: "ت",
  ch: "چ",
  s: "س",
  kh: "خ",
  x: "ش",
  f: "ف",
  q: "ق",
  k: "ك",
};

export const uighur2shirkhan = (word) => {
  return [...word].map((letter) =>
    u2sMap.hasOwnProperty(letter) ? u2sMap[letter] : letter
  );
};

export const shirkhan2uighur = (word) => {
  return [...word].map((letter) =>
    s2uMap.hasOwnProperty(letter) ? s2uMap[letter] : letter
  );
};

const target_content =
  "，ياخشىمۇ سىز دوستۇم سىزنىڭ خىزمەت دائىرىڭىزنى سورىسەم بۇلامدۇ رەئىس";
const shir = uighur2shirkhan(target_content);
const ui = shirkhan2uighur(shir);

console.log("shir", shir.join(""));
console.log("ui", ui.join(""));
