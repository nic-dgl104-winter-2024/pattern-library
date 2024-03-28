# React-native for Singleton Pattern

## ✨ Definition of React-native

React Native is a framework developed by Facebook. It helps make mobile apps that work well on iPhones and Android phones. This makes it easy to create apps that perform and look like they're meant for each device. React Native lets developers reuse code across different projects and see changes instantly while they're working. It's popular because it has a big community of users who share helpful tools and tips, making it a top pick for building mobile apps quickly and effectively.

## ✨ Definition of Singleton Pattern

The Singleton pattern is a design principle that ensures a class has a single instance and provides a centralized method for accessing that instance across the entire application.

## 📦 Why to use react-native for singleton pattern?

This implementation of the React Native Singleton pattern provides a structured way to manage shared state among several application components. It uses a static property to ensure that only one instance of the class is created and to grant global access to its methods and attributes.

These are the major reason to use react-native in this design pattern :

* *Global State Management* - Singleton pattern ensures 
that there is only one instance of a particular class throughout. This can be useful for managing global state in the React Native application, such as user authentication state, theme preferences, or application configuration.

* *Resource Sharing* - If you have resources that need to be shared across different parts of your application, such as database connections, network clients, or event emitters, using the Singleton pattern can provide a convenient way to access these resources from anywhere in your codebase.

* *Performance Optimization* - Creating multiple instances of certain objects can sometimes be resource-intensive. By using the Singleton pattern, you can ensure that these resources are instantiated only once, improving the overall performance of your application.

* *Consistency* - Singleton pattern promotes consistency by providing a single point of access to resources or services. This can make your codebase more maintainable and easier to reason about, especially as your application grows in size and complexity.

* *Third-party Libraries* - Sometimes, third-party libraries or SDKs are designed to be used as singletons. In such cases, implementing the Singleton pattern can align well with the usage patterns of these libraries and make integration smoother.

### ✨ Key Components of Singleton Pattern

* Static Instance Variable (_instance): A private static variable that holds the single instance of the class. This ensures that there is only one instance of the Singleton class throughout the application.

* Constructor: Checks if an instance already exists by examining _instance. If it exists, the constructor returns the existing instance instead of creating a new one. If it doesn't exist, the constructor initializes the class's state and assigns the newly created instance to _instance.

* Static Getter (instance): A static getter method that provides global access to the Singleton instance. It creates the instance if it doesn't exist and returns the existing instance if it does.

* State Management (getState and setState): Methods to get the current state and update the state of the Singleton, respectively. setState merges the new state with the existing state, allowing for updates.

* Object.freeze(): Called on the Singleton class to prevent any future modifications, ensuring the integrity and immutability of the Singleton instance.

## 👩‍💻 Examples

```javascript


```


```javascript


```
## 📋 Description of code Components



## ✨ Reference

Singleton Pattern - Design Patterns. (2019, February 21). https://www.youtube.com/watch?v=sJ-c3BA-Ypo

React Native Design Patterns tutorial. (2019, Aug 12). https://www.youtube.com/playlist?list=PLTgRMOcmRb3M2cPN_6iDDOYn8FONTkc3N

How to use Singleton in react native?.(2019, Mar 2). https://www.youtube.com/watch?v=rFy2hAq5xm4&t=140s

react-native-best-way-to-create-singleton-pattern.(n.d.). https://stackoverflow.com/questions/44023879

Using the Singleton Pattern in React. (2024 ,Mar 17). https://dev.to/antonzo/using-singleton-pattern-in-react-268n

React Fundamentals. (n.d.). https://reactnative.dev/docs/intro-react

Singleton Method Design Pattern in JavaScript. (n.d.). https://www.geeksforgeeks.org/singleton-design-pattern-introduction/
