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

### Advantage:
The primary benefit of the Observer Design Pattern in Java is its promotion of loose coupling between objects referred to as observers and observables. The subject is only aware of the list of observers and does not concern itself with their specific implementations. Furthermore, all observers receive notifications from the subject through a single event call, facilitating broadcast communication.

### Disadvantage:
One drawback is the potential difficulty in debugging when issues arise, as the flow of control between observers and observables is implicit. Predicting when an observer will trigger becomes challenging, particularly in cases where there's a chain between observers, leading to increased complexity in debugging. Additionally, memory management poses another concern, as the subject retains references to all observers. Failing to unregister objects can result in memory-related problems.
(https://javarevisited.blogspot.com/2011/12/observer-design-pattern-java-example.html?m=1)

### Refernces
* GfG. (2024, February 6). Observer design pattern. GeeksforGeeks. https://www.geeksforgeeks.org/
* Refactoring.Guru. (2024b, January 1). Observer in Java. https://refactoring.guru/design-patterns/observer/java/example
* Paul, Javin. “Javarevisited: Observer Design Pattern in Java with Real World Code Example.” Javarevisited, 21 Aug. 2021, javarevisited.blogspot.com/2011/12/observer-design-pattern-java-example.html?m=1. Accessed 28 Mar. 2024.


