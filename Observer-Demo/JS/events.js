import * as T from "./controllers/time.js";
import * as S from "./controllers/storage.js";
import * as P from "./controllers/printer.js";
import { Subject, Observer } from "./classes/ObserverPattern.js";
/**
 * T = time
 * S = storage
 * P = printer
 */
("use strict");
window.TIME_FORM = document.getElementById("timeController");
window.TIME_FORM.addEventListener("submit", T.setTimeDelay);

window.SUBJECT_FORM = document.getElementById("subjectForm");
window.SUBJECT_FORM.addEventListener("submit", (event) => {
  let items = S.createObject(event.target.id);
  console.log(items);
  P.print(items);
});

window.OBSERVER_FORM = document.getElementById("observerForm");
window.OBSERVER_FORM.addEventListener("submit", (event) => {
  let items = S.createObject(event.target.id);
  console.log(items);
  P.print(items);
});

let testO = document.getElementById('testO');
let testS = document.getElementById('testS');
testO.addEventListener("click", (event) => {
  let items = S.getObjects("observer");
  if (items !== null) P.print(items);
});
testS.addEventListener("click", (event) => {
  let items = S.getObjects("subject");
  if (items !== null) P.print(items);
});
