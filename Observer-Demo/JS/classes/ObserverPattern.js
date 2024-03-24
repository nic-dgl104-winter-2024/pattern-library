export class Subject {
  constructor() {
    this.id = Date.now();
    this.data = "";
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
  constructor() {
    this.id = Date.now();
    this.subList = [];
    this.logs = [];
  }
  
  update() {
    this.logs.forEach(log => {
      log.textContent = this.getSubListData();
    })
  }
  getSubListData() {
    let data = [];
    this.subList.forEach(subject => {
      data.push(subject.getData());
    })
    return data;
  }
  observing(subject) {
    this.subList.push(subject);
  }
  
  data() {
    let dataArray = [];
    this.subList.forEach(subject => {
      dataArray.push(subject.getData());
    });
    return dataArray;
  }
  log(ele) {
    this.logs.push(ele);
  }
}

