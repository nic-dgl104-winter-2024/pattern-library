import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// Singleton Class
class Singleton {
  // Private static instance variable
  static _instance;

  constructor() {
    // Check if an instance already exists
    if (Singleton._instance) {
      // Return the existing instance if constructor is called again
      return Singleton._instance;
    }

    // Initialize state or other properties
    this.state = { value: "Initial Singleton State" };

    // Assign this new instance to the private static variable
    Singleton._instance = this;
  }

  // Static getter to access the instance
  static get instance() {
    // Create a new instance if one doesn't already exist
    if (!this._instance) {
      this._instance = new Singleton();
    }
    // Return the Singleton instance
    return this._instance;
  }

  // Method to get the current state
  getState() {
    return this.state;
  }

  // Method to update the state
  setState(newState) {
    // Merges the existing state with the new state
    this.state = { ...this.state, ...newState };
  }
}

// Prevent further modifications to the Singleton class
Object.freeze(Singleton);

// React Native component to demonstrate Singleton usage
export default class SingletonDemo extends Component {
  constructor(props) {
    super(props);
    // Accessing the Singleton instance
    this.singleton = Singleton.instance;
  }

  // Handler to update the Singleton's state
  updateSingletonState = () => {
    // Demonstrates updating shared state via Singleton
    this.singleton.setState({ value: "Updated Singleton State" });
  };

  // Renders the current state of the Singleton
  renderSingletonState = () => {
    const singletonState = this.singleton.getState();
    return <Text>Current Singleton State: {singletonState.value}</Text>;
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Display the Singleton's current state */}
        {this.renderSingletonState()}
        {/* Button to trigger state update */}
        <Button title="Update Singleton State" onPress={this.updateSingletonState} />
      </View>
    );
  }
}
