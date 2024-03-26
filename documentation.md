#Observer Pattern Implementation in Java
 This repository contains a simple implementation of the Observer pattern in Java.

##What is the Observer Pattern?
  The Observer pattern is a behavioral design pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them of any changes in state, usually by calling one of their methods. The Observer pattern promotes loose coupling between objects, allowing for easier maintenance and scalability.

##How Does it Work?
  Subject
  The Subject interface defines the methods required for managing observers. It includes methods to add, remove, and notify observers.

##ConcreteSubject
  The ConcreteSubject class implements the Subject interface. It maintains a list of observers and notifies them whenever its state changes.

##Observer
  The Observer interface declares the method that subjects call to notify observers of a state change.

##ConcreteObserver
  The ConcreteObserver class implements the Observer interface. It registers itself with a subject during instantiation and updates its state whenever it receives a notification from the subject.

##Main Class
  The Main class demonstrates how to use the Observer pattern. It creates a ConcreteSubject object and two ConcreteObserver objects. It then changes the state of the subject and observes how the observers react to the state changes.
##Usage
  1.To use the Observer pattern in your project:
  2.Implement the Subject interface in your subject class.
  3.Implement the Observer interface in your observer classes.
  4.Use the addObserver, removeObserver, and notifyObservers methods in your subject class to manage observers
    and notify them of state changes.

## Code and Explaination

   1. Subject Interface
      This is an interface that defines the methods required for managing observers.
      Methods:
      addObserver(Observer observer): Adds an observer to the list of observers.
      removeObserver(Observer observer): Removes an observer from the list of observers.
      notifyObservers(): Notifies all registered observers when a change occurs.
   2. ConcreteSubject Class
      This class implements the Subject interface.
      It maintains a list of observers and notifies them when its state changes.
Fields:
 observers: A list of observers.
 state: The state of the subject.
Methods:
 getState(): Returns the current state of the subject.
 setState(int state): Sets the state of the subject and notifies observers of the change.
 addObserver(Observer observer): Implements the method to add an observer to the list.
 removeObserver(Observer observer): Implements the method to remove an observer from the list.
 notifyObservers(): Notifies all registered observers by calling their update() method.
 3. Observer Interface
    This is an interface that declares the method update(), which concrete observers must implement.
    This method is called by subjects to notify observers of state changes.
 4. ConcreteObserver Class
    This class implements the Observer interface.
    It registers itself with a subject during instantiation and updates its state when notified by the subject.
Fields:
    subject: The subject being observed.
Constructor:
 ConcreteObserver(ConcreteSubject subject): Registers the observer with the specified subject.
Methods:
 update(): Implements the method to update the observer's state when notified by the subject.
 5. Main Class
    This class contains the main method and demonstrates how to use the Observer pattern.
    It creates a ConcreteSubject object and two ConcreteObserver objects.
    It changes the state of the subject and observes how the observers react to the state changes. 