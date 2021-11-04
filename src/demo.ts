import { Alphabet } from "./alphabet";

const alphabetTable = new Alphabet().getTable();
console.table(alphabetTable);

const elem = `<div style="font-size:32px;color:red;text-align:center"> shirkhan alphabet</div>`;
document.body.innerHTML = elem;
