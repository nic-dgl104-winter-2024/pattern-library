# DGL 104 Pattern Library
A multi-language library containing implementations of common software design and architecture patterns 




# Design Patterns

Design patterns are like templates or solutions to common problems encountered in software design. They represent the best practices used by experienced object-oriented software developers. Design patterns are about reusing designs that have been proven effective, rather than reinventing the wheel. They help you solve specific problems in your code, making your software easier to understand, maintain, and scale.

<br>


> Design templates work as a key to producing a perfect and functional framework and are helpful for developers in easily comprehending their code. In addition to solving common problems they help, also, to avoid duplication that would arise in case the code was not moduled.

<br>

Here's a brief overview and a list of some fundamental design patterns, divided into three main categories:Here's a brief overview and a list of some fundamental design patterns, divided into three main categories.

See the [Design Patterns section](./patterns/)




## Table of Contents
- [Observer Pattern Definition](#observer-pattern)





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



## Articles / Websites



## Contributions 

