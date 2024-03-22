// Observer pattern defines a one to many dependency relationship from Subject to Observers
// Observers wait for a signal / trigger from the subject to start.
// Code reference: https://www.youtube.com/watch?v=PldXoGemkyk


// OBSERVER PATTERN WITH CLASS



class Subject {

    constructor() {

        // The list of subscribers
        this.subscribersList = []
    }

    // Function is added to the list of subscribers
    subscribe(fn) {
        this.subscribersList.push(fn);
    }

    // Function will get removed from the subscribers list
    unsubscribe(fn) {
        this.subscribersList = this.subscribersList.filter((item) => item !== fn);
    }

    // To broadcast to all the observers
    broadcast(data) {
        for (let i = 0; i < this.subscribersList.length; i++) {
            // Calling each function in the observers list with the broadcast data
            this.subscribersList[i](data);
        }
    }
}


const subject = new Subject();

const fn = (data) => {
    console.log("Callback was executed with data", data);
};

// function 'fn' subscribed to Observable
subject.subscribe(fn);


// Broadcasting message to all the subscribers
subject.broadcast("Hello from subject");