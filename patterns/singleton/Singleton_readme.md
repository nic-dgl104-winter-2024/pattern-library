# React-native for Singleton Pattern

## ✨Definition of React-native

React Native is a framework developed by Facebook. It helps make mobile apps that work well on iPhones and Android phones. This makes it easy to create apps that perform and look like they're meant for each device. React Native lets developers reuse code across different projects and see changes instantly while they're working. It's popular because it has a big community of users who share helpful tools and tips, making it a top pick for building mobile apps quickly and effectively.

## ✨Definition of Singleton Pattern

The Singleton pattern is a design principle that ensures a class has a single instance and provides a centralized method for accessing that instance across the entire application.

----
----
## 📦Why to use react-native for Singleton pattern?

This implementation of the React Native Singleton pattern provides a structured way to manage shared state among several application components. It uses a static property to ensure that only one instance of the class is created and to grant global access to its methods and attributes.

These are the major reason to use react-native in this design pattern :

* *Global State Management* - Singleton pattern ensures 
that there is only one instance of a particular class throughout. This can be useful for managing global state in the React Native application, such as user authentication state, theme preferences, or application configuration.

* *Resource Sharing* - If you have resources that need to be shared across different parts of your application, such as database connections, network clients, or event emitters, using the Singleton pattern can provide a convenient way to access these resources from anywhere in your codebase.

* *Performance Optimization* - Creating multiple instances of certain objects can sometimes be resource-intensive. By using the Singleton pattern, you can ensure that these resources are instantiated only once, improving the overall performance of your application.

* *Consistency* - Singleton pattern promotes consistency by providing a single point of access to resources or services. This can make your codebase more maintainable and easier to reason about, especially as your application grows in size and complexity.

* *Third-party Libraries* - Sometimes, third-party libraries or SDKs are designed to be used as singletons. In such cases, implementing the Singleton pattern can align well with the usage patterns of these libraries and make integration smoother.

----
----
## ✨How to implement Singleton pattern in react-native

1. Create the Singleton Class: Define your Singleton class, which will manage shared state or provide access to a shared resource. This class should have a static instance property to hold the single instance of the class.

2. Implement the Singleton Logic: Within the Singleton class constructor, check if an instance already exists. If it does, return the existing instance; otherwise, create a new instance and store it in the static instance property.

3. Use the Singleton in React Native Components: In your React Native components, you can access the Singleton instance using its static getter method (Singleton.instance). You can then use this instance to access shared state or perform operations provided by the Singleton.

4. Update and Retrieve Singleton State: React Native components can interact with the Singleton instance by calling its methods to update or retrieve its state. This allows components to share data and communicate with each other through the Singleton.
----
----
### ✨Key Components of Singleton Pattern

* Static Instance Variable (_instance): A private static variable that holds the single instance of the class. This ensures that there is only one instance of the Singleton class throughout the application.

* Constructor: Checks if an instance already exists by examining _instance. If it exists, the constructor returns the existing instance instead of creating a new one. If it doesn't exist, the constructor initializes the class's state and assigns the newly created instance to _instance.

* Static Getter (instance): A static getter method that provides global access to the Singleton instance. It creates the instance if it doesn't exist and returns the existing instance if it does.

* State Management (getState and setState): Methods to get the current state and update the state of the Singleton, respectively. setState merges the new state with the existing state, allowing for updates.

* Object.freeze(): Called on the Singleton class to prevent any future modifications, ensuring the integrity and immutability of the Singleton instance.

----
----
## ✨Real-world platform which uses Singleton pattern

The Singleton pattern finds wide application in various real-world scenarios:

1. Database Connections: Singleton ensures only one instance of the database connection is created, facilitating easy access from any part of the application.

2. Logging Services: Singleton pattern guarantees a single logging service instance, simplifying the management of log messages.

3. Configuration Objects: By implementing configuration objects as Singletons, application-wide settings become easily accessible and remain consistent.

4. Thread Pools: Singleton thread pools ensure efficient resource utilization by providing a shared pool of threads across the application.

5. Event Bus/Dispatcher: Singleton facilitates the implementation of event buses or dispatchers, enabling communication between different application components without tight coupling.

6. Factories: Singleton can be utilized to create and return objects of various classes based on specified types, enhancing flexibility in object creation.

7. Service Locator: Singleton pattern aids in implementing a centralized service locator, providing a unified point of access for application services.

----
----

## 👩‍💻Example

```javascript
class Singleton {
  static instance = null;

  // Private constructor
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      // Initialize attributes or resources here
    }
    return Singleton.instance;
  }

  // Static method to get the instance
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Example method
  greet() {
    console.log('Hello from Singleton!');
  }
}

// Usage example
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true, both variables hold the same instance

instance1.greet(); // Output: Hello from Singleton!

```

## 📋 Explanation of example code

* We define a class Singleton with a static property instance to hold the single instance of the class.

* The constructor is made private to prevent direct instantiation of the class using the new operator.

* We provide a static method getInstance() to access the single instance. If an instance doesn't exist, it creates one and returns it; otherwise, it returns the existing instance.

* The class can contain additional methods and attributes as needed for managing shared state or resources.

* We demonstrate usage by obtaining the singleton instance using getInstance() and calling a method (greet() in this case) which logs "Hello from Singleton!" to the console.

## 📚 Reference

Singleton Pattern - Design Patterns. (2019, February 21). https://www.youtube.com/watch?v=sJ-c3BA-Ypo

React Native Design Patterns tutorial. (2019, Aug 12). https://www.youtube.com/playlist?list=PLTgRMOcmRb3M2cPN_6iDDOYn8FONTkc3N

How to use Singleton in react native?.(2019, Mar 2). https://www.youtube.com/watch?v=rFy2hAq5xm4&t=140s

react-native-best-way-to-create-singleton-pattern.(n.d.). https://stackoverflow.com/questions/44023879

Using the Singleton Pattern in React. (2024 ,Mar 17). https://dev.to/antonzo/using-singleton-pattern-in-react-268n

React Fundamentals. (n.d.). https://reactnative.dev/docs/intro-react

Singleton Method Design Pattern in JavaScript. (n.d.). https://www.geeksforgeeks.org/singleton-design-pattern-introduction/

Mastering the Singleton Pattern. (2023, Jan 15). https://medium.com/@fakhrijalleli/mastering-the-singleton-pattern-e8f58395cae1