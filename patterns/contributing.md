## Part 2 (Code community project)

### ISSUE: Add React Native implementation for Singleton pattern #8

# React Native Singleton Pattern Implementation

This implementation of the Singleton pattern in React Native provides a structured approach to manage shared state across multiple components within a React Native application.

## Components

### Static Instance Variable (`instance`):

A private static variable that holds the single instance of the class. This ensures that there is only one instance of the Singleton class throughout the application.

### Constructor:

Checks if an instance already exists by examining `instance`. If it exists, the constructor returns the existing instance instead of creating a new one. If it doesn't exist, the constructor initializes the class's state and assigns the newly created instance to `instance`.

### Static Getter (`getInstance`):

A static method that provides global access to the Singleton instance. It creates the instance if it doesn't exist and returns the existing instance if it does.

### State Management (`getState` and `setState`):

Methods to get the current state and update the state of the Singleton, respectively. `setState` merges the new state with the existing state, allowing for updates.

### Object.freeze():

Called on the Singleton class to prevent any future modifications, ensuring the integrity and immutability of the Singleton instance.

## Usage within a React Native Component

The `SingletonDemo` component demonstrates how to interact with the Singleton class to manage shared state within a React Native application.

### Key Components of `SingletonDemo`:

#### Constructor:

Accesses the Singleton instance using `MySingleton.getInstance()` and stores it in the component's state. This provides a way to interact with the shared state managed by the Singleton.

#### `updateSingletonState` Method:

A method defined to update the state of the Singleton. It demonstrates how to modify shared state across the application through the Singleton instance.

#### `renderSingletonState` Method:

This method retrieves the current state from the Singleton and renders it. It illustrates how to access shared state from the Singleton and display it within a component.

#### Render Method:

Defines the UI of the component, displaying the current state stored in the Singleton and providing a button to trigger a state update. This showcases the Singleton's role in facilitating shared state management across different parts of the application.
