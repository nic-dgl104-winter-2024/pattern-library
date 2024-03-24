import { Subject, Observer } from "../classes/ObserverPattern.js";

export function print(items) {
  if (items[0] instanceof Observer) {
    printObservers(items);
  } else {
    printSubjects(items);
    populateSelect(items);
  }
}

function printObservers(items) {
  const ul = document.getElementById("allObservers");
  ul.textContent = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute('observer-id', item.id)
    li.textContent = item.name + (item.name === 'observer' ? `@${item.id}` : '');

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
    li.textContent = item.name + (item.name === 'subject' ? `@${item.id}` : '');

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

function populateSelect(items) {
  const select = document.getElementById('selectSubject');
  select.textContent = "";
  const defaultOption = document.createElement('option');
  defaultOption.textContent = "Subjects";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption)
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option)
    option.addEventListener('click', event => {
      actions(item);
    });
  });
}
function actions(subject) {
  const options = document.getElementById('subjectOptions');
  options.textContent = "";
  const label = document.createElement('label');
  label.htmlFor = "updateData";
  label.textContent = `Update the Data for "${subject.name}"`;
  const input = document.createElement('input');
  input.name = "updateData";
  input.value = subject.getData();

  const button = document.createElement('button');
  button.type = "submit";
  button.textContent = "Update";

  options.appendChild(label);
  options.appendChild(input);
  options.appendChild(button);
  
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
