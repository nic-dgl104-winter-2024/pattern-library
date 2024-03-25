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

      // Subscribe the observer function to the buttonSubject
      buttonSubject.subscribe(function (buttonId) {
        const message = `Observer of ${buttonId} has been notified\n`;
        document.getElementById("output").textContent = message;  
      });

      // Attach event listeners to the buttons for click events
      document
        .getElementById("button1")
        .addEventListener("click", sendButtonClickNotif);
      document
        .getElementById("button2")
        .addEventListener("click", sendButtonClickNotif);


// Coded with Javascript Design Patterns #5 - Observer Pattern https://www.youtube.com/watch?v=45TeJEmcqk8
// Modified the code as inspired by  https://javascriptpatterns.vercel.app/patterns/design-patterns/observer-pattern 