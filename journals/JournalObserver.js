export default class JournalObserver {
    constructor(updateCallback) {
      this.updateCallback = updateCallback;
    }
  
    update(entries) {
      this.updateCallback(entries);
    }
  }
  