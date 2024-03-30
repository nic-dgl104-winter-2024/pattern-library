export class Subject {
  constructor(name = "Subject", id = Date.now(), data = "", observerList = []) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.bind = "subject-bind";
    this.observerList = observerList;
  }
  subscribe(observer) {
    if (!this.observerList.includes(observer)) {
      this.observerList.push(observer);
      observer.addObservable(this);
      return "Observer is now subscribed";
    } else {
      return "Observer already subscribed";
    }
  }
  unsubscribe(observer) {
    if (this.observerList.includes(observer)) {
      this.observerList.pop(observer);
      observer.removeObservable(this.id);
      return "Observer is not unsubscribed";
    } else {
      return "Observer is not subscribed";
    }
  }
  notify() {
    this.observerList.forEach((observer) => {
      observer.update(this.id);
    });
  }
  setData(data) {
    this.data = data;
    let ele = document.querySelectorAll(`[${this.bind}="${this.id}"]`);
    ele.forEach((ele) => {
      ele.textContent = this.data;
    });
  }
  getData() {
    return this.data;
  }
}

export class Observer {
  constructor(name = "Observer", id = Date.now(), subList = []) {
    this.id = id;
    this.name = name;
    this.bind = "observer-bind";
    this.subList = subList;
  }
  update() {
    let ele = document.querySelectorAll(`[${this.bind}="${this.id}"]`);
    ele.forEach((ele) => {
      ele.textContent = this.getSubListData();
    });
  }
  getSubListData() {
    let data = [];
    this.subList.forEach((subject) => {
      data.push(subject.getData());
    });
    return data;
  }
  addObservable(subject) {
    this.subList.push(subject);
  }
  removeObservable(subject) {
    this.subList.pop(subject);
  }

  data() {
    let dataArray = [];
    this.subList.forEach((subject) => {
      dataArray.push(subject.getData());
    });
    return dataArray;
  }
}
