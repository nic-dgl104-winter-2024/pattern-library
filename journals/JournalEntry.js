
export default class JournalSubject {
    constructor() {
      this.observers = [];
      this.entries = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer.update(this.entries));
    }
  
    addEntry(entry) {
      this.entries.push(entry);
      this.notifyObservers();
    }
  }
  