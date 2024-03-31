import { Subject, Observer } from "../classes/ObserverPattern.js";

("use strict");

export let observers = retriveFromStorage("observer");
export let subjects = retriveFromStorage("subject");

console.log(observers, subjects);

export function getObjects(key) {
  return key === "observer" ? observers : key === "subject" ? subjects : null;
}

export function createObject(id) {
  let instance = id.includes("observer") ? "observer" : "subject";
  let nameInput = document.querySelector(`[name="${instance}"]`);
  let name = nameInput.value == "" ? instance : nameInput.value;
  let object = instance === "observer" ? new Observer(name) : new Subject(name);
  nameInput.value = "";
  addToArray(object, instance);
}

export function getSubscribers(bool, id, key) {
  let subbed = bool ? "subscriber" : "nonsubscriber";
  if (bool) {
    let subs = createInstance(retriveFromStorage(key));
    for (let i = 0; i < subs.length; i++) {
      if (subs[i].id == id) {
        return { ...subs[i], sub: subbed };
      }
    }
  }
}

export function mutateData(e, id, type) {
  switch (e) {
    case "remove":
      if (type === "observer") {
        const index = observers.findIndex((observer) => observer.id === id);
        if (index !== -1) {
            const observer = observers[index];
            observer.subList.forEach(subject => {
                subjects.findIndex(subject => {
                    subject.unsubscribe(observer);
                });
            });
            observers.splice(index, 1); // Remove the object at the found index
            addToStorage(observers, "observer");
        }
    } else {
        const index = subjects.findIndex((obj) => obj.id === id);
        if (index !== -1) {
            console.log(type);
        }
    }
      
      break;
    case "edit":
      // edit();
      break;
    case "notify":
      // notify();
      break;
    default:
      console.log("unknown event");
  } 
}
function addToArray(object, instance) {
  let list = [];
  console.log(object instanceof Observer, "add to array")
  if (object instanceof Observer) {
    observers.push(object);
    list = [...observers];
  } else {
    subjects.push(object);
    list = [...subjects];
  }
  console.log(list);
  addToStorage(list, instance)
}
function addToStorage(list, instance) {
  localStorage.removeItem(instance);
  localStorage.setItem(instance, JSON.stringify(list));
}

function retriveFromStorage(key) {
  let items = JSON.parse(localStorage.getItem(key));
  if (items === null) return [];
  return createInstance(items);
}

function createInstance(list) {
  let items = [];
  if (list.length <= 0) return [];
  if (list[0].bind.includes("observer")) {
    list.forEach((item) => {
      let temp = new Observer(item.name, item.id, item.subList);
      items.push(temp);
    });
  } else {
    list.forEach((item) => {
      let temp = new Subject(item.name, item.id, item.data, item.observerList);
      items.push(temp);
    });
  }
  return items;
}
