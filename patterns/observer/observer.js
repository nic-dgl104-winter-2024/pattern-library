// Observer pattern defines a one to many dependency relationship from Subject to Observers
// Observers wait for a signal / trigger from the subject to start.



// OBSERVER PATTERN WITH CLASS



class Observable {

    constructor() {

        // The subscribers array keeps the list of subscribers
        this.subscribers = []
    }

    // The subscribing function will be added to the list of subscribers
    subscribe(fn) {
        this.subscribers.push(fn);
    }
}
