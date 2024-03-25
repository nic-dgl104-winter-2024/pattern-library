import { Subject, Observer } from "../classes/ObserverPattern.js";
("use strict");
/**
 * @param string element#id || event.target.id
 * @returns array
 */
export function createObject(id) {
  let instance = id === "observerForm" ? "observer" : "subject";
  let nameInput = document.querySelector(`[name="${instance}"]`);
  let name = nameInput.value == "" ? instance : nameInput.value;
  console.log(name.value);
  let object = instance === "observer" ? new Observer(name) : new Subject(name);
  nameInput.value = "";
  let list = retriveFromStorage(instance);
  addToStorage(list, object, instance);
}

export function getObjects(key) {
  let items = retriveFromStorage(key)
  if (items.length === 0) return null;
  return createInstance(items, key);
}

export function getSubscribers(bool, id, key) {
  if(bool) {
    let subs = createInstance(retriveFromStorage(key), key);
    for(let i = 0; i <= subs.length; i++) {
      if (subs[i].id == id) {
        return subs[i];
      }
    }
  }
}

function addToStorage(list, object, instance) {
  list.push(object);
  localStorage.setItem(instance, JSON.stringify(list));
}

function retriveFromStorage(key) {
  let items = JSON.parse(localStorage.getItem(key)) || [];
  return items;
}

function createInstance(list, instance) {
  let items = [];
  if (instance === "observer") {
    list.forEach((item) => {
      item = new Observer(item.name, item.id, item.subList);
      items.push(item);
    });
  } else {
    list.forEach((item) => {
      item = new Subject(item.name, item.id, item.data, item.observerList);
      items.push(item);
    });
  }
  return items;
}