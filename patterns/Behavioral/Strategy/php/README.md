# Strategy pattern
Strategy is a behavioral design pattern that lets you define a family of algorithms, putting each of them into a separate class, and making their 
objects interchangeable. This pattern has low complexity and is very popular.The Strategy pattern consists of two main components:

**Context:** The main class that holds a reference to one of the strategies. It delegates part of the work to the strategy object.

**Strategies:** These are the interchangeable algorithms. Each strategy implements a common interface. They also defines the behavior or algorithm that needs to be implemented.
## Advantages
The primary benefit of employing the Strategy pattern is enhancing code flexibility and scalability, thereby simplifying both maintenance tasks and the addition of new functionalities. Additionally, this pattern aids in reducing redundancy by enabling the reuse of algorithms.

The Strategy design pattern facilitates the dynamic swapping of algorithms within an object during runtime, effectively isolating the implementation specifics of each algorithm from the consuming code.

## Disadvantages
Implementing the Strategy pattern can introduce additional complexity to your codebase, especially when dealing with multiple strategies and their interactions. This complexity can make the code harder to understand and maintain.

In PHP, creating multiple strategy classes and managing their instantiation can lead to increased memory usage and overhead, especially in scenarios with a large number of strategies or frequent context switching.

## References
https://medium.com/codex/strategy-pattern-in-php-8-54fbb4ae53f5

https://phpenterprisesystems.com/php-software-development/196-what-is-the-strategy-pattern-and-how-its-implemented-in-php

https://webkul.com/blog/strategy-design-pattern-using-php/
