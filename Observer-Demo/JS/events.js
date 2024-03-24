import * as T from "./controllers/time.js";
import * as S from "./controllers/storage.js";
import * as P from  "./controllers/printer.js"
/**
 * T = time
 * S = storage
 * P = printer
 */
"use strict";
window.TIME_FORM = document.getElementById('timeController');
window.TIME_FORM.addEventListener('submit', T.setTimeDelay);

window.SUBJECT_FORM = document.getElementById('subjectForm');
window.SUBJECT_FORM.addEventListener('submit', event => {
  let items = S.createObject(event.target.id);
  // P.createPrintable(items);
  // console.log(items);
});

window.OBSERVER_FORM = document.getElementById('observerForm');
window.OBSERVER_FORM.addEventListener('submit', (event) =>{
  let items = S.createObject(event.target.id);
  // console.log(items);
});

function printToPage(objects) {
  console.log(objects);
}