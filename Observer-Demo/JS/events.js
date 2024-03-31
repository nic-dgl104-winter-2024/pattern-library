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

window.addEventListener("load", (event) => {
  document.addEventListener("submit", (event) => {
    const form = event.target.closest("form");
    if (form) event.preventDefault();
  });
});

window.TIME_FORM = document.getElementById("timeController");
window.TIME_FORM.addEventListener("submit", T.setTimeDelay);

window.SUBJECT_FORM = document.getElementById("subjectForm");
window.SUBJECT_FORM.addEventListener("submit", (event) => {
  S.createObject(event.target.id);
  printObjects("subject", "allSubjects");
});

window.OBSERVER_FORM = document.getElementById("observerForm");
window.OBSERVER_FORM.addEventListener("submit", (event) => {
  S.createObject(event.target.id);
  printObjects("observer", "allObservers");
});

let options = document.getElementById("subjectOptions");
options.addEventListener("submit", (event) => {
  console.log("Form Submitted");
});

let testO = document.getElementById("testO");
let testS = document.getElementById("testS");
testO.addEventListener("click", (event) => {
  let items = S.getObjects("observer");
  if (items !== null) P.print(items);
});
testS.addEventListener("click", (event) => {
  let items = S.getObjects("subject");
  if (items !== null) P.print(items);
});

function print() {
  printObjects("observer", "allObservers");
  printObjects("subject", "allSubjects");
  // printSelects("subject", "selectSubject", "subjectOptions");
  // printSelects("observer", "selectObserver", "observerOptions");
}

function printObjects(type, parentId) {
  let objectList = S.getObjects(type);
  if (objectList !== null) {
    let parent = document.getElementById(parentId);
    P[type](parent, objectList);
  }
}
function printSelects(type, parentId, target) {
  let objectList = S.getObjects(type);
  if (objectList !== null) {
    let parent = document.getElementById(parentId);
    let events = {
      click: "click",
      change: (event) => action(target),
    };
    P.select(type, parent, objectList, events);
  }
}

function action(target) {
  const parent = document.getElementById(target);
  const bind = event.target.getAttribute("bind");
  P.actions(parent, event.target);
  let s = S.getSubscribers(true, event.target.value, bind);
  P.createSelect(parent, "subscribedObservers", getArray(s), s.sub);
  console.log(s);
}
// brought to you by chatGPT
function getArray(object) {
  for (let key in object) {
    if (Array.isArray(object[key])) {
      return object[key];
    }
  }
}
print();
