# ✨ Singleton - PHP

## Explanation

The key features of the Singleton pattern in PHP are:

1. **Private Constructor**: Ensures that instances cannot be created from outside the class.
2. **Static Instance Variable**: Holds the instance of the class, if it exists.
3. **Public Static Method**: This method (commonly named `getInstance`) controls access to the instance. On the first call, it creates the instance and returns it. On subsequent calls, it returns the already created instance.

## Advantages and Disadvantages
**Advantages**:

- Ensures a class has just one instance.
- Provides a global point of access to that instance.
- The instance is only created when it's needed.

**Disadvantages**:

- Can be difficult to debug.
- Violates the Single Responsibility Principle by controlling their own creation and lifecycle.
- Makes unit testing harder due to global state.

## References
- [PHP: The Right Way](https://phptherightway.com/)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.javier8a.com/itc/bd1/articulo.pdf)