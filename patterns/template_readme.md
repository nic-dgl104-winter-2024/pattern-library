# Design Pattern - Template Pattern

## 🌟Definition of Template Pattern

The Template Method design pattern is a behavioral approach where a superclass outlines the framework of an algorithm, permitting subclasses to modify particular steps without altering its overall structure. This pattern encourages code reuse by consolidating the core algorithmic framework in the superclass, empowering subclasses to offer specific implementations for individual steps, facilitating customization and adaptability.

----
----

## 🌟Components

* Abstract Class (or Interface):
    * It serves as a blueprint for other classes.
    * Cannot be instantiated on its own; it's meant to be subclassed.
    * Can contain both abstract methods and concrete methods.
    * Provides a common interface for all its subclasses.

* Concrete Class (Subclass):
    * Inherits from the abstract class.
    * Provides concrete implementations for all abstract methods or hooks defined in the abstract class.
   * Can also provide additional methods specific to its functionality.

* Template Method:
   * Declared in the abstract class.
   * Outlines the algorithm's structure by defining the steps in a specific order.
   * Calls abstract methods or hooks as necessary within its implementation.
  * Often marked as final to prevent subclasses from altering the algorithm's structure.

* Abstract Methods (or Hooks):
  * Declared in the abstract class but not implemented.
  * Must be implemented by concrete subclasses.
  * These methods provide flexibility for subclasses to customize parts of the algorithm according to their specific requirements.
  * Define the contract that concrete subclasses must adhere to.

* Concrete Methods:
   * Implemented in the abstract class.
   * Provide common behavior shared by all subclasses.
   * These methods are called by the template method to perform tasks that remain unchanged across different implementations.
  * They contribute to code reusability and maintainability by centralizing common functionality.

----
----
## 🌟How it works! 

In the Template Method pattern, it's like following a recipe. The main recipe acts as an abstract class, giving you a structured way to cook. Some parts are flexible, like adding seasoning. The steps are laid out in order, like a checklist (template method). You can customize certain steps with your own twist using abstract methods. As the chef (subclass), you fill in these customizable parts with your own ingredients and techniques, allowing for different versions of the dish while sticking to the basic cooking steps.

----
----
## 🌟Benefits

* Reuse: Template Method lets us reuse the same basic process across different situations.

* Less Repeat Work: We avoid writing the same code over and over by putting it in one place.

* Change Only What's Needed: Subclasses can change parts of the process without affecting everything else.

* Consistent Results: Because the basic process stays the same, we get consistent results every time.

* Easier Management: It's easier to manage and understand the code when the structure is clear and consistent.

* Adding New Options: We can easily add new ways of doing things without breaking what's already there.

----
----

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
## 🌟References


Refactoring Guru. (n.d.). Template Method Design Pattern. https://refactoring.guru/design-patterns/template-method

GeeksforGeeks. (n.d.). Template Method Design Pattern. https://www.geeksforgeeks.orgtemplate-method-design-pattern/

Tutorialspoint. (n.d.). Template Method Design Pattern. https://www.tutorialspoint.com/design_pattern/template_pattern.html