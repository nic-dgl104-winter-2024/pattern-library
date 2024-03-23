class Subject {
  constructor() {
    this.id = Date.now();
    this.data = "";
    this.observerList = [];
  }
  subscribe(observer) {
    if (this.observerList.contains(observer)) {
      return (error = "Observer already subscribed");
    } else {
      this.observerList.push(observer);
      return (success = "Observer is now subscribed");
    }
  }
  unsubscribe(observer) {
    if (this.observerList.contains(observer)) {
      this.observerList.pop(observer);
      return (success = `Observer is now unsubscribed to subject@${this.id}`);
    } else {
      return (error = `Observer is not subscribed to subject@${this.id}`);
    }
  }
  notify() {
    this.observerList.forEach((observer) => { 
      observer.update();
    });
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
}
