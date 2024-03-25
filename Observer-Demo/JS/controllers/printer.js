export function observer(parent, observers) {
  clearParent(parent);

  observers.forEach((observer) => {
    const ele = li(observer, "observer");
    if (observer.subList.length !== 0) {
      ele.appendChild(sub(observer.subList));
    }
    parent.appendChild(ele);
  });
}

function sub(list) {
  const ul = document.createElement("ul");
  list.forEach((item) => {
    let li = document.createElement("li");
    li.setAttribute(item.bind, item.id);
    li.textContent = list;
    ul.appendChild(li);
  });
}

function li(object, type) {
  const li = document.createElement("li");
  li.setAttribute(`${type}-id`, object.id);
  li.textContent = getName(object, type);
  return li;
}

export function subject(parent, subjects) {
  clearParent(parent);

  subjects.forEach((subject) => {
    const ele = li(subject, "subject");

    const span = document.createElement("span");
    span.setAttribute(subject.bind, subject.id);
    span.textContent = subject.data;
    ele.appendChild(span);

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

function populateSelect(items) {
  const select = document.getElementById("selectSubject");
  select.textContent = "";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Subjects";
  defaultOption.disabled = true;
  defaultOption.selected = true;
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
function actions(subject) {
  const options = document.getElementById("subjectOptions");
  options.textContent = "";
  const label = document.createElement("label");
  label.htmlFor = "updateData";
  label.textContent = `Update the Data for "${subject.name}"`;
  const input = document.createElement("input");
  input.name = "updateData";
  input.value = subject.getData();

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Update";

  options.appendChild(label);
  options.appendChild(input);
  options.appendChild(button);

  getObservers(subject, T.getObjects("observer"));
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
