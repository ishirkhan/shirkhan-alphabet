import Alphabet from "./alphabet";

/**
 * 返回字符串中给定位置的前一个字符
 * @param {string} text
 * @param {number} curPos
 * @returns {string}
 */
function getPreChar(text, curPos) {
  return text.slice(curPos - 1, curPos);
}
/**
 * shirkhan 输入协调器
 * @param {HTMLElement} target
 */
const InputHandler = (target = document.getElementById("root")) => {
  target.dir = "rtl";

  const alphabet = new Alphabet();

  target.addEventListener("keypress", (e) => {
    e.preventDefault();

    let result = "";

    // 获取字符，判断是否存在而且不是特殊字符，如果特殊字符需要获取前一个字符重新匹配得出结果
    /**
     *
     * - 如果是组合字母需要用组合字母并剪掉上一个字符
     * - 如果sozuq字母前一个字符是空字符 得自动补充Hemze
     */

    const cursorPos = target.selectionStart;

    const pressedChar = e.key;
    const pressedLetter = alphabet.getLetter(pressedChar);

    const preChar = getPreChar(target.value, cursorPos);

    const updateInputValue = (value) => {
      target.value = target.value + value;
    };

    if (!alphabet.isValidChar(pressedChar)) {
      updateInputValue(pressedChar);
      return;
    }

    if (alphabet.ifHemze(pressedChar, preChar)) {
      updateInputValue(alphabet.withHemze(pressedChar));
      return;
    }

    if (alphabet.isAPair(preChar, pressedChar)) {
      let deleteCharCount = alphabet.ifHemze(preChar, "") ? 2 : 1; //如果前一个字母是sozuq 并且前面是空字符是因自动增加的hemze,需要多减去hemze
      target.value = target.value.slice(0, cursorPos - deleteCharCount);
      updateInputValue(alphabet.getPairing(preChar, pressedChar).uighurChar);
      return;
    }

    updateInputValue(pressedLetter.uighurChar);
  });
};

export default InputHandler;
