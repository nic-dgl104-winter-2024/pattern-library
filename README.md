# DGL 104 Pattern Library
A multi-language library containing implementations of common software design and architecture patterns 



## Documentation Table of Contents
- [Observer Pattern Definition](#observer-pattern)
- [Singleton Pattern Definition](#singleton-pattern)

## Library Table of Contents

### [Creational Patterns](patterns/Creational)

#### [Singleton](patterns/Creational/singleton)
- [JavaScript](patterns/Creational/singleton/JavaScript)
- [ReactNative](patterns/Creational/singleton/ReactNative)
- [Kotlin](patterns/Creational/singleton/Kotlin)
- [Dart](patterns/Creational/singleton/Dart)
- [Lua](patterns/Creational/singleton/Lua)

### [Behavioral Patterns](patterns/Behavioral)

####  [Observer](patterns/Behavioral/Observal)
- [JavaScript](patterns/Behavioral/Observal/JavaScript)
- [ReactNative](patterns/Behavioral/Observal/ReactNative)
- [Kotlin](patterns/Behavioral/Observal/Kotlin)
- [Dart](patterns/Behavioral/Observal/Dart)
- [Lua](patterns/Behavioral/Observal/Lua)

### [Architectual Patterns](patterns/Architectual)

- [Model View ViewModel](patterns/Architectual/Model_View_ViewModel)
- [Model View Controller](patterns/Architectual/Model_View_Controller)




<a id="observer-pattern"></a>

### Definition of Observer Pattern

The observer pattern is a behavioral design pattern often used in software development. 

The purpose of the observer pattern is to establish a one-to-many dependency between objects. An object known as the subject maintains a list of it's dependents, called observers. The subject automatically notifies these observers of any state changes it undergoes, typically achieved by invoking one of their methods.

This pattern is often employed in software systems to ensure consistency among multiple components or to notify interested parties about specific events.

As an example, consider a scenario using the analogy of a publisher/subscriber relationship. In this analogy, the publisher acts as the subject, while the subscribers represent the observers. Whenever a significant event occurs to the publisher, it notifies the subscribers by invoking specific notification methods on their objects. This process ensures that subscribers are quickly informed of important updates.

#### References

Design Patterns and Refactoring. (n.d.). Sourcemaking.com. https://sourcemaking.com/design_patterns/observer

Refactoring Guru. (2014). Observer. Refactoring.guru. https://refactoring.guru/design-patterns/observer

Observer pattern. (2022, November 13). Wikipedia. https://en.wikipedia.org/wiki/Observer_pattern#:~:text=In%20software%20design%20and%20engineering


<a id="#singleton-pattern"></a> 

### Definition of Singelton Pattern

#### References






## Articles / Websites



## Contributions 

