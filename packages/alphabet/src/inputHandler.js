import Alphabet from "./alphabet";

/**
 * shirkhan 输入协调器
 * @param {HTMLElement} target
 */
const InputHandler = (target = document.getElementById("root")) => {
  target.dir = "rtl";

  const alphabet = new Alphabet();
  console.log("InputHandler -> alphabet", alphabet);

  target.addEventListener("keypress", (e) => {
    let result = "";

    const pressedChar = e.key;

    // 获取字符，判断是否存在而且不是特殊字符，如果特殊字符需要获取前一个字符重新匹配得出结果
    const letter = alphabet.getLetter(pressedChar);

    if (typeof letter === "undefined") {
      result = pressedChar;
    } else if (!letter.isSpecialChar && !letter.isSozuq) {
      result = letter.uighurChar;
    } else {
      //组合字母
      const cursorPos = target.selectionStart;
      const preChar = target.value.slice(cursorPos - 1, cursorPos);
      const preLetter = alphabet.getLetter(preChar);
      if (typeof preLetter === "undefined" && preChar.length === 0) {
        //前一个字母是空字母而且是sozuq字母时需要自动补充Hemze
        result = alphabet.getLetter("ii").uighurChar + letter.uighurChar;
      } else if (letter.isSpecialChar) {
        const combination = alphabet.getLetter(
          preLetter.shirkhanChar + letter.shirkhanChar
        );

        if (typeof combination === "undefined") {
          result = letter.uighurChar;
        } else {
          result = combination.uighurChar;
          //因组合字母，所以编辑中需要剪掉上个字符
          target.value = target.value.slice(0, cursorPos - 1);
        }
      }
    }

    target.value = target.value + result;

    e.preventDefault();
  });
};

export default InputHandler;
