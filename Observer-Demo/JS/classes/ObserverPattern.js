export class Subject {
  constructor(name, data = "") {
    this.id = Date.now();
    this.name = name;
    this.data = data
    this.observerList = [];
  }
  subscribe(observer) {
    if (this.observerList.includes(observer)) {
      return "Observer already subscribed";
    } else {
      observer.observing(this);
      this.observerList.push(observer);
      return "Observer is now subscribed";
    }
  }
  unsubscribe(observer) {
    if (this.observerList.includes(observer)) {
      this.observerList.pop(observer);
      return (success = `Observer is now unsubscribed to subject@${this.id}`);
    } else {
      return (error = `Observer is not subscribed to subject@${this.id}`);
    }
  }
  notify() {
    this.observerList.forEach((observer) => {
      observer.update(this);
    });
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
}

export class Observer {
  constructor(name = "") {
    this.id = Date.now();
    this.name = name;
    this.bind = 'observer-bind';
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
  observing(subject) {
    this.subList.push(subject);
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
