class Observer {
  constructor() {
    this.id = Date.now();
    this.data = "";
  }
  update() {
    this.data = getData();
    return (sussess = `Observer@${this.id}`);
  }
}
