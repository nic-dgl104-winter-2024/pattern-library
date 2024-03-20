// Observer pattern defines a one to many dependency relationship from Subject to Observers
// Observers wait for a signal / trigger from the subject to start.



// OBSERVER PATTERN WITH CLASS



class Observable {

    constructor() {

        // The list of subscribers
        this.subscribers = []
    }

    // Function is added to the list of subscribers
    subscribe(fn) {
        this.subscribers.push(fn);
    }

    // Function will get removed from the subscribers list
    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter((item) => item !== fn);
    }
}
