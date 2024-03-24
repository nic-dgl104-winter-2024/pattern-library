import { Subject, Observer } from "../classes/ObserverPattern.js";
("use strict");

export function createSubject() {
  event.preventDefault();
  let name = document.querySelector('[name="subject"]').value;
  let subject = new Subject(name);
  let items = addToStorage(subject);
  return items;
}

export function createObserver() {
  event.preventDefault();
  let name = document.querySelector('[name="observer"]').value;
  let observer = new Observer(name);
  let items = addToStorage(observer);
  return items;
}

function addToStorage(object) {
  //ChatGPT gave me the ternary operator and items || []
  let storageKey = object instanceof Observer ? "observers" : "subjects";
  let items = JSON.parse(localStorage.getItem(storageKey)) || [];
  items.push(object);
  localStorage.setItem(storageKey, JSON.stringify(items));
  return items;
}
