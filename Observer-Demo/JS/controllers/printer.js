import {Subject, Observer} from "../classes/ObserverPattern.js";

export function print(items) {
  if(items[0] instanceof Observer) {
    printObservers(items);
  } else {
    printSubjects(items);
  }
}

function printObservers(items) {
  const ul = document.getElementById('allObservers');
  items.forEach(item => {
    const li = document.createElement('li');
    li.append(item.name);
    if(item.subList.length !== 0) {
      const subUl = document.createElement('ul');
      items.subList.forEach(sub => {
        let subLi = document.createElement('li');
        subLi.setAttribute(`[${item.bind}="${item.id}"]`);
        subLi.append(sub);
        subUl.appendChild(subLi);
      });
    }
    ul.appendChild(li);
  });
}

function printSubjects(items) {
  const ul = document.getElementById('allSubjects');
  items.forEach(item => {
    const li = document.createElement('li');
    li.append(item.name);
    if (item.observerList.length !== 0) {
      const subUl = document.createElement('ul');
      items.observerList.foreach(obs => {
        let subLi = document.createElement('li');
        subLi.setAttribute(`[${item.bind}="${item.id}"]`);
        subLi.append(obs);
        subUl.appendChild(subLi);
      })
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
