export function textToWords(text: string) {
  text = text.trim();
  if (text.length === 0) return [];
  // 也可以通过编码范围来替换 [^\u0626-\u06d5] // 为了缩小范围，精准处理维哈可字母，这里直接放了字符
  return text
    .replace(
      new RegExp("[^چۋېرتيۇڭوپھسداەىقكلزشغۈبنمئلاۆجخگفژٴحعۉۅ]", "g"),
      " "
    )
    .split(" ")
    .filter((item) => item.trim().length);
}
