# Factory Design Pattern

The Factory method is one of the most widely used design patterns. It functions as an interface for making objects that are modifiable after they are created. The difficulty creating objects without depending on the traditional constructor technique is addressed by this pattern. Rather, it creates the newly desired object based on the configuration or description that it receives (Cocca, 2022).


In JavaScript, calling a constructor function with the new operator is a common way to create an object. Nevertheless, there are situations in which the client doesn't know or shouldn't be concerned with which of multiple possible objects to create. The value of the Factory Method resides in its ability to enable the client to assign object creation while retaining control over the kind of object that is instantiated (Poorte, 2023).

## Diagram

![Factory Design Pattern Visual Representation](C:\Users\user\Desktop\DGL 103\pattern-library\Images\javascript-factory-method.jpg)

The following entities are involved in this pattern when implementing using JavaScript:

   - Creator: This corresponds to the 'factory' object in the provided visual representation, responsible for producing new products. It implements the 'factoryMethod', which yields freshly generated products.

   - Concrete Product: These are the products being created, represented in the example code by the 'Employees' objects. Each product adheres to the same interface, comprising identical attributes and operations.

**Abstract Product: This role is not commonly used in JavaScript. Traditionally, it would declare a product interface for various programming languages or scenarios. However, JavaScript does not specify interfaces explicitly. Instead, actual objects typically implement the relevant properties and methods directly, eliminating the need for an abstract product interface.**

(Poorte, 2023)

Here's an example demonstrating the Factory Method pattern in JavaScript:



# References
Cocca, G. (2022, June 22). Factory Method Pattern. Retrieved from freeCodeCamp: https://www.freecodecamp.org/news/javascript-design-patterns-explained/#factory-method-pattern

Poorte, J. (2023, September 30). JavaScript Factory Method Design Pattern. Retrieved from doFactory: https://www.dofactory.com/javascript/design-patterns/factory-method
