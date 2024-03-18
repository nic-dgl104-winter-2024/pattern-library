# DGL 104 Pattern Library
A multi-language library containing implementations of common software design and architecture patterns 



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

### Definition of MVC pattern

The Model-View-Controller (MVC) pattern helps in organizing programming by keeping separate parts for how information looks, is shown, and is taken in by users. It helps in reusing code and lets different people work on it at the same time. The Model deals with the app's data and main logic. The View shows the data to the user. The Controller is in the middle, handling what the user does and updating the Model or View. This way, changing one part, like how the app looks, doesn't affect other parts, like its main logic. This is very helpful in making websites because it allows for easy updates and growth, using different technologies for each part (Model, View, Controller).

References:

- [Gamma, Erich, et al. "Design Patterns: Elements of Reusable Object-Oriented Software." Addison-Wesley, 1994.](https://www.javier8a.com/itc/bd1/articulo.pdf)

- [Krasner, Glenn E., and Stephen T. Pope. "A Description of the Model-View-Controller User Interface Paradigm in the Smalltalk-80 System." Journal of Object Technology, 1988.](https://www.researchgate.net/publication/239452280_A_Description_of_the_Model-View-Controller_User_Interface_Paradigm_in_the_Smalltalk80_System)


## Articles / Websites



## Contributions 

