# Observer Pattern Implementation in Java

This repository contains a simple implementation of the Observer pattern in Java.

## What is the Observer Pattern?

The Observer pattern is a behavioral design pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them of any changes in state, usually by calling one of their methods. The Observer pattern promotes loose coupling between objects, allowing for easier maintenance and scalability.

## How Does it Work?

### Subject Interface

The Subject interface defines the methods required for managing observers. It includes methods to add, remove, and notify observers.

### ConcreteSubject Class

The ConcreteSubject class implements the Subject interface. It maintains a list of observers and notifies them whenever its state changes.

### Observer Interface

The Observer interface defines the method that subjects call to notify observers of a state change.

### ConcreteObserver Class

The ConcreteObserver class implements the Observer interface. During instantiation, it registers itself with a subject. Upon receiving a notification from the subject, it updates its state accordingly.

## Main Class

The Main class demonstrates how to use the Observer pattern. It creates a ConcreteSubject object and two ConcreteObserver objects. It then changes the state of the subject and observes how the observers react to the state changes.

## Usage

To use the Observer pattern in your project:

1. Implement the Subject interface in your subject class.
2. Implement the Observer interface in your observer classes.
3. Use the `addObserver`, `removeObserver`, and `notifyObservers` methods in your subject class to manage observers and notify them of state changes.

### Code and Explanation

1. **Subject Interface**:
   - `addObserver(Observer observer)`: Adds an observer to the list of observers.
   - `removeObserver(Observer observer)`: Removes an observer from the list of observers.
   - `notifyObservers()`: Notifies all registered observers when a change occurs.

2. **ConcreteSubject Class**:
   - Maintains a list of observers and notifies them when its state changes.

3. **Observer Interface**:
   - Declares the `update()` method, which concrete observers must implement. This method is called by subjects to notify observers of state changes.

4. **ConcreteObserver Class**:
   - Registers itself with a subject during instantiation and updates its state when notified by the subject.

5. **Main Class**:
   - Contains the `main` method and demonstrates how to use the Observer pattern. It creates a ConcreteSubject object and two ConcreteObserver objects. It changes the state of the subject and observes how the observers react to the state changes.

### Main Class

The Main Class serves as the entry point for the application and demonstrates the usage of the Observer pattern. It contains the `main` method, where the interaction with the pattern components is showcased.

#### Functionality

The Main Class performs the following actions:

1. Creates a `ConcreteSubject` object.
2. Creates two `ConcreteObserver` objects.
3. Modifies the state of the subject.
4. Observes how the observers react to the state changes.

#### Code Snippet

Here's a snippet from the `main` method:

```java
// Created a ConcreteSubject object
ConcreteSubject subject = new ConcreteSubject();

// Created two ConcreteObserver objects
ConcreteObserver observer1 = new ConcreteObserver();
ConcreteObserver observer2 = new ConcreteObserver();

// Register observers with the subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Modifying the state of the subject
subject.setState(1);
