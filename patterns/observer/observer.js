// Observer pattern defines a one to many dependency relationship from Subject to Observers
// Observers wait for a signal / trigger from the subject to start.
// Code reference: https://www.youtube.com/watch?v=PldXoGemkyk


// OBSERVER PATTERN WITH CLASS



class Subject {

    constructor() {

        // The list of subscribers
        this.subscribersList = []
    }
    // Function to check if observer is already subscribed
    isSubscribed(fn) {
        return this.subscribersList.includes(fn);
    }
    // Function is added to the list of subscribers
    subscribe(fn) {
        if (!this.isSubscribed(fn)) {
            this.subscribersList.push(fn);
            console.log("Observer subscribed successfully");
        } else {
            console.log("Observer is already subscribed");
        }
    }

    // Function will get removed from the subscribers list
    unsubscribe(fn) {
        if (this.isSubscribed(fn)) {
            this.subscribersList = this.subscribersList.filter(item => item !== fn);
            console.log("Observer unsubscribed successfully");
        } else {
            console.log("Observer is not subscribed");
        }
    }

    // To broadcast to all the observers
    broadcast(data) {
        console.log("Broadcasting message to all subscribers...");
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

// Trying to subscribe the same observer again
subject.subscribe(fn);

// Broadcasting message to all the subscribers
subject.broadcast("Hello from subject");

// Unsubscribing the observer
subject.unsubscribe(fn);

// Trying to unsubscribe an observer which is not subscribed
subject.unsubscribe(fn);