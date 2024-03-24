import { Subject, Observer } from "../classes/ObserverPattern.js";

export function print(items) {
  if (items[0] instanceof Observer) {
    printObservers(items);
  } else {
    printSubjects(items);
  }
}

function printObservers(items) {
  const ul = document.getElementById("allObservers");
  ul.textContent = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute('observer-id', item.id)
    li.textContent = item.name;

    if (item.subList.length !== 0) {
      const subUl = document.createElement("ul");
      items.subList.forEach((sub) => {
        let subLi = document.createElement("li");
        subLi.setAttribute(item.bind, item.id);
        subLi.textContent = sub;
        subUl.appendChild(subLi);
      });
    }
    ul.appendChild(li);
  });
}

function printSubjects(items) {
  const ul = document.getElementById("allSubjects");
  ul.textContent = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute('subject-id', item.id)
    li.textContent = item.name;

    const span = document.createElement("span");
    span.setAttribute(item.bind, item.id)
    span.textContent = item.data;

    li.appendChild(span);

    if (item.observerList.length !== 0) {
      const subUl = document.createElement("ul");
      items.observerList.foreach((obs) => {
        let subLi = document.createElement("li");
        subLi.setAttribute(obs.bind, obs.id);
        subLi.textContent = obs.name;
        subUl.appendChild(subLi);
      });
    }
    ul.appendChild(li);
  });
}
/**
 * Subject Template
 *
 *
 * Subject 1 -- data
 *  - Subscriber 1
 *  - Subscriber 2
 * Subject 2 -- data
 *  - Subscriber
 */

/**
 * Observer Template
 *
 *
 * Observer 1
 *  - Observing -- data
 *  - Observing -- data
 * Observer 2
 *  - Observing -- data
 */
