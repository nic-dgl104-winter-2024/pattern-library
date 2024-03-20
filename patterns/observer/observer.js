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

    // To broadcast to all the observers
    broadcast(data) {
        for (let i = 0; i < this.subscribers.length; i++) {
            // Calling each function in the observers list with the broadcast data
            this.subscribers[i](data);
        }
    }
}


const observer = new Observable();

const fn = (data) => {
    console.log("Callback was executed with data", data);
};

// function 'fn' subscribed to Observable
observer.subscribe(fn);


// Broadcasting message to all the subscribers
observer.broadcast("Hello from observable");