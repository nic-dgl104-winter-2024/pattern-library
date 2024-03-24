import {Subject, Observer} from "../classes/ObserverPattern.js";
"use strict";

export function createSubject() {
  event.preventDefault();
  let name = document.querySelector('[name="subject"]').value;
  let subject = new Subject(name);
  console.log(subject);
}

export function createObserver() {
  event.preventDefault();
  let name = document.querySelector('[name="observer"]').value;
  let observer = new Observer(name);
  addToStorage(observer);
}

function addToStorage(object) {
    if (object instanceof Observer) {
      console.log('observer');
    } else if (object instanceof Subject){
      console.log('subject');
    } else {
      console.log('Error');
    }
}