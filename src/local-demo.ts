import { Syllable } from "./alphabet";

function test(word: string) {
  console.group("word:", word);
  const token = syllable.tokenize(word);
  console.log("token", token);

  const group = syllable.tokenToGroup(token);
  console.log("group", group);

  const gpsitional = syllable.groupToPositional(group);
  console.log("gpsitional", gpsitional);

  const sylableWord = syllable.positinalGroupToWord(gpsitional, word);
  console.log("sylableWord", sylableWord);

  console.groupEnd();
}

const syllable = new Syllable();

test("ئادەم");
test("ئادەملەردە");
test("كىشىلەرنىڭكىدە");
