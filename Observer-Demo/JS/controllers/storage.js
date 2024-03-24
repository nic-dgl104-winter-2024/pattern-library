import { Subject, Observer } from "../classes/ObserverPattern.js";
("use strict");
/**
 * @param string event.target.id
 * @returns array
 */
export function createObject(id) {
  let instance = id === "observerForm" ? "observer" : "subject";
  let name = document.querySelector(`[name="${instance}"]`).value;
  let object = instance === "observer" ? new Observer(name) : new Subject(name);
  return storageControl(object);
}

function storageControl(object) {
  let instance = object instanceof Observer ? "observers" : "subjects";
  let list = retriveFromStorage(instance);
  if (list.length === 0) {
    addToStorage(list, object, instance);
    return object;
  } else {
    addToStorage(list, object, instance);
    return createInstance(list, instance);
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
  if (instance === "observers") {
    list.forEach((item) => {
      item = new Observer(item.name, item.subList);
      items.push(item);
    });
  } else {
    list.forEach((item) => {
      item = new Subject(item.name, item.data, item.observerList);
      items.push(item);
    });
  }
  return items;
}
