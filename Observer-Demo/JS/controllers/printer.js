//print all observers
export function observer(parent, observers) {
  clearParent(parent);
  const type = "observer";
  observers.forEach((observer) => {
    const ele = document.createElement('li');
    const title = h3(getName(observer, type));
    title.appendChild(removeEvent(type, observer.id));
    ele.appendChild(title);
    bind(ele, observer);
    ele.appendChild(sub(observer.subList, type, observer.id));
    parent.appendChild(ele);
  });
}

//print all subjects
export function subject(parent, subjects) {
  clearParent(parent);

  const type = "subject";
  subjects.forEach((subject) => {
    const ele = document.createElement('li');
    const title = h3(getName(subject, type));
    title.appendChild(removeEvent(type, subject.id));
    ele.appendChild(title);
    bind(ele, subject);
    ele.appendChild(span(subject));
    ele.appendChild(sub(subject.observerList, type, subject.id));
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
function sub(list, type, id) {
  const ul = document.createElement("ul");
  ul.classList.add('sub');
  if (list.length !== 0) {
    list.forEach((object) => {
      const ele = li(object, list);
      bind(ele, object);
      if (type === "observer") {
        const data = span(object.getData());
        bind(data, object);
      }
      ele.appendChild(removeEvent());
      ul.appendChild(ele);
    });
  }
  ul.appendChild(li("test", type));
  ul.appendChild(addEvent(id));
  return ul;
}
function h3(title) {
  const ele = document.createElement('h3');
  ele.classList.add('subject-title');
  ele.textContent = title;
  return ele;
}

//create list element
function li(object, type, ignoreName = false) {
  const li = document.createElement("li");
  if (!ignoreName) {
    li.textContent = getName(object, type);
    return li;
  }
  li.appendChild(object);
  return li;
}
function addEvent(id) {
  let ele = document.createElement("li");
  let a = document.createElement("a");
  a.classList.add('cursor','add');
  a.textContent = "Add";
  ele.appendChild(a);
  ele.addEventListener("click", (event) => {
    console.log(event.target, id);
  });
  return ele;
}
function removeEvent(type, id) {
  let ele = document.createElement("span");

  let del = document.createElement("a");
  del.classList.add('cursor', 'remove');
  del.textContent = "Delete";
  del.addEventListener("click", (event) => {
    console.log("Remove Event", id);
  });
  if (type === 'subject') {

    let edit = document.createElement("a");
    edit.classList.add('cursor', 'edit');
    edit.textContent = "Edit";
    edit.addEventListener("click", (event) => {
      console.log("Edit Event", id);
    });
    
    let notify = document.createElement("a");
    notify.classList.add('cursor', 'notify');
    notify.textContent = "Notify";
    notify.addEventListener("click", (event) => {
      console.log("Notify Event", id);
    }); 
    ele.appendChild(edit);
    ele.appendChild(notify);
  }
  ele.appendChild(del);

  return ele;
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
