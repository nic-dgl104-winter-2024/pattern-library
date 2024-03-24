import { Subject, Observer } from "../classes/ObserverPattern.js";
("use strict");

export function createObject(id) {
  let instance = id == "observerForm" ? "observer" : "subject";
  let name = document.querySelector(`[name="${instance}"]`).value;
  let object = instance === 'observer' ? new Observer(name) : new Subject(name);
  return addToStorage(object);
}

function addToStorage(object) {
  //ChatGPT gave me the ternary operator and items || []
  let storageKey = object instanceof Observer ? "observers" : "subjects";
  let items = JSON.parse(localStorage.getItem(storageKey)) || [];
  items.push(object);
  localStorage.setItem(storageKey, JSON.stringify(items));
  return items;
}