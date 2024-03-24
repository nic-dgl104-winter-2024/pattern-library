export class Subject {
  constructor(name, data = "") {
    this.id = Date.now();
    this.name = name;
    this.data = data;
    this.bind = "subject-bind";
    this.observerList = [];
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
      observer.removeObservable(this);
      return "Observer is not unsubscribed";
    } else {
      return "Observer is not subscribed";
    }
  }
  notify() {
    this.observerList.forEach((observer) => {
      observer.update(this);
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
  dataBind(bind) {
    this.bind = bind;
  }
}

export class Observer {
  constructor(name = "") {
    this.id = Date.now();
    this.name = name;
    this.bind = "observer-bind";
    this.subList = [];
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
  dataBind(bind) {
    this.bind = bind;
  }
}
