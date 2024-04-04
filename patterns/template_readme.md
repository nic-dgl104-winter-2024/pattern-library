# Design Pattern - Template Pattern

## 🌟Definition of Template Pattern

The Template Method design pattern is a behavioral approach where a superclass outlines the framework of an algorithm, permitting subclasses to modify particular steps without altering its overall structure. This pattern encourages code reuse by consolidating the core algorithmic framework in the superclass, empowering subclasses to offer specific implementations for individual steps, facilitating customization and adaptability.

----
----

## 🌟Components

* Abstract Class (or Interface): This defines the template method, which is the skeleton of the algorithm. It contains one or more abstract methods or hooks that the subclasses need to implement.

* Concrete Class (Subclass): Subclasses inherit from the abstract class and provide concrete implementations for the abstract methods or hooks defined in the abstract class.

* Template Method: This is the method declared in the abstract class, outlining the algorithm's structure by calling the abstract methods or hooks in a specific order. It's often marked as final to prevent subclasses from changing its structure.

* Abstract Methods (or Hooks): These are declared in the abstract class and must be implemented by subclasses. They allow subclasses to provide specific implementations for parts of the algorithm.

* Concrete Methods: These are methods implemented in the abstract class and called by the template method. They provide common behavior that doesn't change across subclasses.

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


## 🌟References


Refactoring Guru. (n.d.). Template Method Design Pattern. https://refactoring.guru/design-patterns/template-method

GeeksforGeeks. (n.d.). Template Method Design Pattern. https://www.geeksforgeeks.orgtemplate-method-design-pattern/

Tutorialspoint. (n.d.). Template Method Design Pattern. https://www.tutorialspoint.com/design_pattern/template_pattern.html