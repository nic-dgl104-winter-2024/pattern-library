# Template Method Design Pattern

This Java project demonstrates the Template Method design pattern. The Template Method pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses. This allows subclasses to provide specific implementations for certain steps while keeping the overall structure of the algorithm intact.

## Files
# AbstractTemplate.java: 
* Defines the abstract class AbstractTemplate with the template method templateMethod() and abstract methods stepOne(), stepTwo(), and stepThree().
* Includes hook methods isExtraStepRequired() and extraStep() for optional steps in the algorithm.

# ConcreteClassA.java: Implements specific steps for ConcreteClassA.
* Extends AbstractTemplate and provides concrete implementations for the abstract methods.
* Overrides isExtraStepRequired() and extraStep() to include an additional step in the algorithm.
# ConcreteClassB.java
* Also extends AbstractTemplate and provides its implementations for the abstract methods.
# Main.java
* Demonstrates how to use the Template Method pattern by creating instances of ConcreteClassA and ConcreteClassB and invoking their templateMethod().

# Reflections of Success
This project successfully demonstrates the Template Method design pattern by showcasing a reusable algorithm structure with customizable steps in subclasses. This enables code organization, extensibility, and maintenance.

## How to Run
* Ensure you have Java Development Kit (JDK) installed on your machine.
* Compile the Java files using the command:
```
javac templatemethod/*.java
```

* Run the Main class using the command:
```
java templatemethod.Main
```

```
AbstractTemplate templateA = new ConcreteClassA();
templateA.templateMethod();
```

## Output
You should see the following output when you run the Main class:
```
ConcreteClassA: Step One
ConcreteClassA: Step Two
ConcreteClassA: Step Three
ConcreteClassA: Performing extra step

ConcreteClassB: Step One
ConcreteClassB: Step Two
ConcreteClassB: Step Three
```

This output demonstrates how the Template Method pattern allows subclasses to provide specific implementations for certain steps while maintaining the overall algorithm structure defined in the abstract class.

![github dev](https://user-images.githubusercontent.com/856858/130119109-4769f2d7-9027-4bc4-a38c-10f297499e8f.gif)

# Code Review and Outcomes
It’s a quick way to edit and navigate code. It's especially useful if you want to edit multiple files at a time or take advantage of all the powerful code editing features of Visual Studio Code when making a quick change. For more information, see our [documentation](https://github.co/codespaces-editor-help).
