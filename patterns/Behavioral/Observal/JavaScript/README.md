# ✨ JavaScript Function Implementation of Observer Pattern

## Introduction

The Observer pattern is a behavioral design pattern that lets objects subscribe to events and receive notifications when those events happen. The independent 

object (known as a subject) notifies other objects (observers) when its state changes. This pattern is commonly used in JavaScript to implement event handling systems

It's fundamental to event-driven programming, especially in JavaScript, promoting flexible and loosely coupled design.

Take a look at the diagram below.

## Diagram

![Observer Pattern](/patterns/Behavioral/Observal/JavaScript/images/javascript-observer.jpg)

With two main objects involved as shown in the diagram above, let's take a closer look at the key aspects of this pattern:

1. Subject Implementation
Subject (Observable):
- The `ButtonSubject` constructor represents the Subject.
- It initializes an array `observersList` to hold observer functions.
- Provides methods `subscribe`, `unsubscribe`, and `notify`.

``` javascript
// Define a constructor function for the Subject object
function ButtonSubject() {
  this.observersList = []; // Array to hold observer functions
}

// Extend the prototype of the ButtonSubject object with methods for subscribing, unsubscribing, and notifing observers
ButtonSubject.prototype = {
  // Method to subscribe an observer
  subscribe: function (observer) {
    this.observersList.push(observer);
  },
  // Method to unsubscribe an observer
  unsubscribe: function (observerToRemove) {
    // Remove the observerToRemove from the array by finding its index
    const index = this.observersList.indexOf(observerToRemove);
    if (index !== -1) {
      this.observersList.splice(index, 1);
    }
  },

  // Method to notify all observers
  notify: function (buttonId) {
    // Call each observer function based on the button clicked
    for (const observer of this.observersList) {
      observer(buttonId);
    }
  },
};

// Instantiate a new ButtonSubject object
const buttonSubject = new ButtonSubject();

// Function to handle button click events and notify observers
function sendButtonClickNotif(event) {
  buttonSubject.notify(event.target.id);
}
```

2. Observer Implementation
Observer (Subscriber):
- Observer function is registered as observer using the `subscribe` method, listening for notifications from the `ButtonSubject`.
- It takes buttonId as a parameter, which is the id of the button that triggers the notification.
- The observer function updates the content of the HTML element with id `output` to update the UI.

``` javascript
 // Subscribe the observer function to the buttonSubject
      buttonSubject.subscribe(function (buttonId) {
        const message = `Observer of ${buttonId} has been notified\n`;
        document.getElementById("output").textContent = message;  
      });
```

3. Subscription Mechanism:
- Event listeners are attached to the buttons (`button1` and `button2`) to trigger the notification process when clicked.

``` javascript
// Attach event listeners to the buttons for click events
document
  .getElementById("button1")
  .addEventListener("click", sendButtonClickNotif);
document
  .getElementById("button2")
  .addEventListener("click", sendButtonClickNotif);
```

4. Notification
- When a button is clicked, the `sendButtonClickNotif` function is triggered and then invokes the `notify` method of the `ButtonSubject`.
- `notify` method calls each observer function, passing the `buttonId` as an argument. This ensures that all subscribed observers are notified of the button click event.
- This then goes back to the Observer function receiving the `buttonId` as a parameter and updates the UI by setting the textContent of the HTML element. This allows responsive user interaction as UI updates occur after the button click event has been handled.

``` javascript
// Function to handle button click events and notify observers
function sendButtonClickNotif(event) {
  buttonSubject.notify(event.target.id);
}
```

Event-Driven

The entire mechanism operates in event-driven programming. Observers listen to button click events and respond by updating the UI. 

In the whole, Observer Pattern shows how it can be useful when working with event-based interactions.

## References

Dofactory. (n.d.). JavaScript observer design pattern. https://www.dofactory.com/javascript/design-patterns/observer#:~:text=The%20Observer%20pattern%20offers%20a,event%20driven%20programming%2C%20including%20JavaScript. 

Fuller, E. (2020, January 9). How to use the observable pattern in JavaScript. WebDevStudios. https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/

