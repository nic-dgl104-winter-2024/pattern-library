//print all observers
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

//print all subjects
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

//print a select and all options in items, also adds eventListeners on option clicks
export function select(type, parent, items, events) {
  clearParent(parent);

  const option = optionTitle(type);
  parent.appendChild(option);

  items.forEach((item) => {
    const option = options(item, type);
    option.addEventListener(events.click, events.change);
    parent.appendChild(option);
  });
}

export function actions(parent, object) {
  clearParent(parent);
  const title = document.createElement("h3");
  title.textContent = `Options for ${object.getAttribute("name")}`;
  parent.appendChild(title);
}

export function createSelect(parent, id, items, type) {
  const select = document.createElement("select");
  select.setAttribute("id", id);
  select.appendChild(optionTitle(type));
  parent.appendChild(select);
}
//clear the parent element
function clearParent(parent) {
  return (parent.textContent = "");
}

//return the name, if the name is the same as the type add the id to 'serialize' it?
function getName(object, type) {
  return object.name + (object.name === type ? `@${object.id}` : "");
}

//create a sublist
function sub(list, type) {
  const ul = document.createElement("ul");
  list.forEach((object) => {
    const ele = li(object, list);
    bind(ele, object);
    if (type === "observer") {
      const data = span(object.getData());
      bind(data, object);
    }
    ul.appendChild(ele);
  });
  li()
}

//create list element
function li(object, type) {
  const li = document.createElement("li");
  li.textContent = getName(object, type);
  return li;
}

//create span, used to store object data
function span(object) {
  const span = document.createElement("span");
  span.textContent = object.data;
  return span;
}

//binds element to object
function bind(ele, object) {
  let bind = object.bind ? object.bind : "bind";
  let id = object.id ? object.id : object;
  return ele.setAttribute(bind, id);
}

//create options
function options(object, type) {
  const option = document.createElement("option");
  option.value = object.id;
  option.setAttribute("name", object.name);
  bind(option, type);
  option.textContent = getName(object, type);
  return option;
}

//create option title
function optionTitle(type) {
  const option = document.createElement("option");
  option.textContent = `${type}s`;
  option.disabled = true;
  option.selected = true;
  return option;
}

/**
 *  iconography reference
 *  [ - ] -> remove [Observer, Subject] from [Subject, Observer]
 *  [ + ] -> add    [Observer, Subject] to   [Subject, Observer]
 *  [ * ] -> delete [Observer, Subject]
 *  [ = ] -> update [Subject] Data
 *  [ ! ] -> notify [Subject] -> [Subscribers]
 * 
 * Subject Template
 * 
 * # Subjects 
 * Subject 1 -- data [ * ] [ = ] [ ! ]
 *  - Subscriber 1 [ - ]
 *  - Subscriber 2 [ - ]
 *  - [ + ]
 * Subject 2 -- data [ * ] [ = ] [ ! ]
 *  - Subscriber 1 [ - ]
 *  - [ + ]
 */

/**
 * Observer Template
 *
 * # Observers
 * Observer 1 [ * ]
 *  - Observing -- data [ - ]
 *  - Observing -- data [ - ]
 *  - [ + ]
 * Observer 2 [ * ]
 *  - Observing -- data [ - ]
 *  - [ + ]
 */
