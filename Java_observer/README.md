# Obeserver Design Pattern 
The Observer Design Pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.

The fundamental goal of the Observer pattern is to establish communication and interaction between items, with a particular emphasis on how things respond in response to changes in the state of other objects.

### Components of Observer Design Pattern
* Subject maintains a list of observers, enabling dynamic registration and unregistration.
* Subject notifies observers of state changes.
* Observer defines an interface with an update method for receiving updates from the subject.
* ConcreteSubject holds the actual state and notifies observers when it changes.
* ConcreteObserver implements the observer interface, registering with a subject and reacting to state changes.
(https://www.geeksforgeeks.org/observer-pattern-set-1-introduction/)

### Application
* Messaging and Notification Systems:  
    In messaging systems, publishers send messages to subscribers without having direct knowledge of individual subscribers, a decoupling accomplished through the implementation of the Observer pattern
* Stock Trading Platforms:  
    In stock trading applications, stock prices alert registered investors to changes, enabling them to respond to market shifts, thus illustrating the implementation of the Observer pattern.
* Game Development:
    In game development, the Observer pattern facilitates the separation of game objects, enabling communication between them, such as updating the UI when a player's score changes, thus achieving decoupling.

(https://www.linkedin.com/pulse/dive-real-world-examples-design-patterns-simplified-everyone-a-r)


### Refernces
* GfG. (2024, February 6). Observer design pattern. GeeksforGeeks. https://www.geeksforgeeks.org/
* Refactoring.Guru. (2024b, January 1). Observer in Java. https://refactoring.guru/design-patterns/observer/java/example
