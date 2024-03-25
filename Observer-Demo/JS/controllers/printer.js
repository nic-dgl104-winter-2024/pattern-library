export function observer(parent, observers) {
  clearParent(parent);

  observers.forEach((observer) => {
    const ele = li(observer, "observer");
    bind(ele, observer);
    if (observer.subList.length !== 0) {
      ele.appendChild(sub(observer.subList));
    }
    parent.appendChild(ele);
  });
}

export function subject(parent, subjects) {
  clearParent(parent);

  subjects.forEach((subject) => {
    const ele = li(subject, "subject");
    const data = span(subject);

    bind(ele, subject);
    ele.appendChild(data);
    if (subject.observerList.length !== 0) {
      ele.appendChild(sub(subject.observerList));
    }
    parent.appendChild(ele);
  });
}

export function subjectList(parent, subjects) {
  clearParent(parent);
}
export function observerList(parent, observers) {}

function clearParent(parent) {
  return (parent.textContent = "");
}

function getName(object, type) {
  return object.name + (object.name === type ? `@${object.id}` : "");
}
function sub(list, type) {
  const ul = document.createElement("ul");
  list.forEach((item) => {
    const ele = li(item, list);
    bind(ele, item);
    if (type === "observer") {
      const data = span(item.getData());
      bind(data, item);
    }
    ul.appendChild(ele);
  });
}

function li(object, type) {
  const li = document.createElement("li");
  li.textContent = getName(object, type);
  return li;
}

function span(subject) {
  const span = document.createElement("span");
  span.textContent = subject.data;
  return span;
}

function bind(ele, item) {
  return ele.setAttribute(item.bind, item.id);
}

export function select(type, parent, items, events) {
  clearParent(parent);

  const option = optionTitle(type);
  parent.appendChild(option);

  items.forEach(item => {
    const option = options(item, type);
    option.addEventListener(events.click, events.change);
    parent.appendChild(option);
  });
}
function options(item, type) {
  const option = document.createElement('option');
  option.value = item.id;
  option.textContent = getName(item, type);
  return option;
}
function optionTitle(type) {
  const option = document.createElement("option");
  option.textContent = `${type}s`;
  option.disabled = true;
  option.selected = true;
  return option;
}

function populateSelect(items) {
  const select = document.getElementById("selectSubject");
  select.textContent = "";

  select.appendChild(defaultOption);
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent =
      item.name + (item.name === "subject" ? `@${item.id}` : "");
    select.appendChild(option);
    option.addEventListener("click", (event) => {
      actions(item);
    });
  });
}

function getObservers(subject, observers) {
  console.log(observers);
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
