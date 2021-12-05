import { khanText2ug, khan2ug, ug2khan } from "./alphabet";

import { marked } from "marked";
console.log(ug2khan("شىرخان"));
console.log(khan2ug("shirkhan"));

// console.log(khanText2u(markdown));
function showMarkdown(markdown: string) {
  console.log("showMarkdown ~ markdown", markdown);
  markdown = khanText2ug(markdown).toString();
  console.log("showMarkdown ~ markdown", markdown);
  document.getElementById("result")!.innerHTML = marked.parse(markdown);
}

const markdownTextArea = document.getElementById("test") as HTMLTextAreaElement;

showMarkdown(markdownTextArea.value);

markdownTextArea.addEventListener("input", (e: any) =>
  showMarkdown(e.target.value)
);
