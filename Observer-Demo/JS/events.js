import * as T from "./controllers/time.js";
import * as S from "./controllers/storage.js";
/**
 * T = time
 * S = storage
 */
"use strict";
window.TIME_FORM = document.getElementById('timeController');
window.TIME_FORM.addEventListener('submit', T.setTimeDelay);

window.SUBJECT_FORM = document.getElementById('subjectForm');
window.SUBJECT_FORM.addEventListener('submit', S.createSubject);

window.OBSERVER_FORM = document.getElementById('observerForm');
window.OBSERVER_FORM.addEventListener('submit', (event) =>{
  let items = S.createObserver();
  console.log(items);
});

function printToPage(objects) {
  console.log(objects);
}