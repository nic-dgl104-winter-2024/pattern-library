# Design Patterns

Design patterns are like templates or solutions to common problems encountered in software design. They represent the best practices used by experienced object-oriented software developers. Design patterns are about reusing designs that have been proven effective, rather than reinventing the wheel. They help you solve specific problems in your code, making your software easier to understand, maintain, and scale.

<br>


> Design templates work as a key to producing a perfect and functional framework and are helpful for developers in easily comprehending their code. In addition to solving common problems they help, also, to avoid duplication that would arise in case the code was not moduled.

<br>

Here's a brief overview and a list of some fundamental design patterns, divided into three main categories:Here's a brief overview and a list of some fundamental design patterns, divided into three main categories:


## 1. Creational Patterns
<br>

These patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational patterns solve this problem by somehow controlling this object creation.

<br>

| Pattern  | Description                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------------------|
| [Singleton](./singleton/)       | Ensures a class has only one instance and provides a global point of access to it.                                  |
| [Abstract Factory](./abstract-factory/) | Provides an interface for creating families of related or dependent objects without specifying their concrete classes.|
| Builder         | Separates the construction of a complex object from its representation, allowing the same construction process to create various representations.|
| Factory Method  | Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.     |
| Prototype       | Creates new objects by copying an existing object, known as the prototype.  

<br>
                                        |

## 2. Structural Patterns

These patterns deal with the composition of classes or objects. They help ensure that if one part of a system changes, the entire system doesn't need to do the same. They also help in making systems more efficient by organizing different components in a particular structure.
<br>
| Pattern | Description                                                                                                        |
|----------------|--------------------------------------------------------------------------------------------------------------------|
| Adapter (Wrapper) | Allows the interface of an existing class to be used as another interface.                                        |
| Bridge         | Separates an object’s abstraction from its implementation so that the two can vary independently.                  |
| Composite      | Composes objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly. |
| Decorator      | Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality. |
| Facade         | Provides a simplified interface to a complex subsystem.                                                            |
| Flyweight      | Reduces the cost of creating and manipulating a large number of similar objects.                                   |
| Proxy          | Provides a surrogate or placeholder for another object to control access to it.                                    |

<br>

## 3. Behavioral Patterns

Behavioral patterns are all about efficient communication and the assignment of responsibilities between objects. They help make complex flows and communication between objects easy to manage and scale.

<br>


| Pattern    | Description                                                                                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Chain of Responsibility | Passes the request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain. |
| Command          | Turns a request into a stand-alone object that contains all information about the request. This transformation allows you to parameterize methods with different requests, delay or queue a request's execution, and support undoable operations. |
| Interpreter      | Implements a specialized language.                                                                                                                            |
| Iterator         | Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.                                      |
| Mediator         | Reduces chaos between communicating objects by encapsulating how objects interact and communicate, making it easier to change these interactions.             |
| Memento          | Captures and externalizes an object's internal state so that the object can be restored to this state later.                                                  |
| Observer         | Allows a subject to notify its observers about changes to its state.                                                                                          |
| State            | Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.                                          |
| Strategy         | Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it. |
| Template Method  | Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.           |
| Visitor          | Lets you define a new operation without changing the classes of the elements on which it operates.                                                            |


<br>
<br>

# References

1. [GeeksforGeeks - Software Design Patterns](https://www.geeksforgeeks.org/software-design-patterns/?ref=lbp)


