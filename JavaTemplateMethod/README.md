# Template Method Design Pattern

This Java project demonstrates the Template Method design pattern. The Template Method pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses. This allows subclasses to provide specific implementations for certain steps while keeping the overall structure of the algorithm intact.

## Files
* AbstractTemplate.java: Defines the abstract class with the template method and placeholder methods.
* ConcreteClassA.java: Implements specific steps for ConcreteClassA.
* ConcreteClassB.java: Implements specific steps for ConcreteClassB.
* Main.java: Contains the main method to demonstrate the pattern by creating instances of ConcreteClassA and ConcreteClassB.

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

# Why?
It’s a quick way to edit and navigate code. It's especially useful if you want to edit multiple files at a time or take advantage of all the powerful code editing features of Visual Studio Code when making a quick change. For more information, see our [documentation](https://github.co/codespaces-editor-help).
