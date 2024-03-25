# Facade Design Pattern
The facade design pattern is a structural design pattern that enables users to construct an easy-to-use interface by concealing the complex implementation details of the system (Poorte, 2023). The goal of this pattern is to hide the implementation details from users and provide a uniform, simplified interface for a collection of interfaces, making them easier to use (GeeksforGeeks, 2023).

## Uses of Facade Design Pattern
1. Facade offers a higher-level interface, which makes interacting with complex subsystems easier.
2. Facade serves as an API between the presentation layer and service layer in multi-layer web applications, concealing the complex nature of business objects and interactions.
3. Facade can be used to modify complicated or confusing legacy code by hiding its complexities behind a simpler interface, making it simpler for clients to work with.
4. Facade is frequently used with other design patterns, such as Singleton or Factory, to improve usability and provide a consistent interface for client interaction.
(Poorte, 2023)

## Diagram
![javascript-facade](https://github.com/nazrinzuwair/pattern-library/assets/144160072/757bff23-d434-4189-8006-db5b1415989e)

The elements that are involved in the Facade design pattern are:
1. Subsystem: The entire intricate logic and implementation are handled by a class, collection of classes, or interfaces that make up the Subsystem.
2. Facade: The class or object that acts as a doorway into the Subsystem's implementation while concealing its complex details of its implementation.
3. Client: The Client uses the streamlined Facade Interface for performing operations without being aware of the specifics of the internal implementation.
(GeeksforGeeks, 2023)

## Example demonstrating the Facade Method pattern in JavaScript:

### Step 1: Creation of Subsystem

In JavaScript, we first define classes representing different subsystems. Each class encapsulates functionality related to a specific aspect of the system:

``` javascript
// Define a class for SoftwareDeveloper
class SoftwareDeveloper {
    // Define a method within the SoftwareDeveloper class to represent coding
    code() {
      console.log('Software Developer codes the frontend and backend for an application');
    }
}

// Define a class for Designer
class Designer {
    // Define a method within the Designer class to represent designing
    design() {
      console.log('UI Designer creates the wireframes for the website.');
    }
}

// Define a class for DatabaseEngineer
class DatabaseEngineer {
    // Define a method within the DatabaseEngineer class to represent connecting
    connect() {
      console.log('Database engineer performs the connection between the application and the database.');
    }
}
```

We have three classes here: SoftwareDeveloper, Designer, and DatabaseEngineer, each of which represents a subsystem responsible for a specific task in the software development process. The SoftwareDeveloper class's code() method takes handle of coding activities, the Designer class's design() method takes responsibility of designing tasks, and the DatabaseEngineer class's connect() method takes charge of database connection tasks. Each subsystem's behavior is specified by these classes.

### Step 2: Creation of the Facade

The `SoftwareFacade` class, which serves as a simplified interface to manage the software development process, is created in this stage. Instances of the classes "SoftwareDeveloper," "Designer," and "DatabaseEngineer" are initialized by the constructor. These subsystems are controlled by the `softwareDevelopmentProcess()` method, which calls particular code, design, and connect methods, respectively. The client's interaction is made simpler by this encapsulation, which conceals the complexity of various subsystems behind a single facade interface.

``` javascript
// Define a class for SoftwareFacade
class SoftwareFacade {
    // Constructor function to initialize instances of SoftwareDeveloper, Designer, and DatabaseEngineer classes
    constructor() {
        this.softwareDeveloper = new SoftwareDeveloper(); // Initialize instance of SoftwareDeveloper class
        this.uiDesigner = new Designer(); // Initialize instance of Designer class
        this.databaseEngineer = new DatabaseEngineer(); // Initialize instance of DatabaseEngineer class
    }

    // Method to represent the software development process, coordinating actions of SoftwareDeveloper, Designer, and DatabaseEngineer
    softwareDevelopmentProcess() {
        this.softwareDeveloper.code(); // Call the code method of SoftwareDeveloper
        this.uiDesigner.design(); // Call the design method of Designer
        this.databaseEngineer.connect(); // Call the connect method of DatabaseEngineer
    }
}
```

### Step 3: Usage and the Client code

A new instance of 'SoftwareFacade' named `softwareFacade` is created by this line of code. Next, it calls the `softwareDevelopmentProcess()` function of the `softwareFacade` instance to start the software development process. The facade pattern provides a single interface that makes it easier to work with the `SoftwareDeveloper`, `Designer`, and `DatabaseEngineer` subsystems. This method coordinates the actions of these subsystems.

```Javascript
// Create an instance of the SoftwareFacade class
const softwareFacade = new SoftwareFacade();

// Call the softwareDevelopmentProcess method of the softwareFacade instance, initiating the software development process
softwareFacade.softwareDevelopmentProcess();

```

### Output

```
Software Developer codes the frontend and backend for an application
UI Designer creates the wireframes for the website.
Database engineer performs the connection between the application and the database
```

## Implementing Facade Method Pattern in Various Programming Languages

The Facade design pattern can be implemented in various programming languages. Some commonly used languages for implementing the Facade pattern include:

1. [Python](https://www.geeksforgeeks.org/facade-method-python-design-patterns/)
2. [Java](https://www.tutorialspoint.com/design_pattern/facade_pattern.htm)
3. [C++](https://refactoring.guru/design-patterns/facade/cpp/example#:~:text=Facade%20in%20C%2B%2B,unwanted%20dependencies%20to%20one%20place.)
4. [C#](https://www.dofactory.com/net/facade-design-pattern)
5. [Ruby](https://blog.appsignal.com/2020/03/18/facade-pattern-in-rails-for-performance-and-maintainability.html)

# References

GeeksforGeeks. (2023, October 31). Facade Design Pattern | JavaScript Design Pattern. Retrieved from GeeksforGeeks: https://www.geeksforgeeks.org/facade-design-patterns-javascript-design-pattern/
GeeksforGeeks. (2023, October 31). Facade Design Pattern | JavaScript Design Pattern. Retrieved from GeeksforGeeks: https://www.geeksforgeeks.org/facade-design-patterns-javascript-design-pattern/
Poorte, J. (2023, September 30). JavaScript Façade Design Pattern. Retrieved from doFactory: https://dofactory.com/javascript/design-patterns/facade

