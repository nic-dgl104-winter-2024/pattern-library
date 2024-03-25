class MySingleton {
  static instance;

  constructor() {
    if (MySingleton.instance) {
      throw new Error("Singleton instance already exists. Use getInstance method.");
    }

    this.myProperty = "Initial Value";

    MySingleton.instance = this;
    Object.freeze(MySingleton.instance);
  }

  static getInstance() {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  }

  myMethod() {
    console.log('Singleton method has been called.');
  }

  anotherMethod() {
    console.log('Another method of the Singleton has been called.');
  }
}

Object.freeze(MySingleton);

// Usage in a React Native component
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    // Get the singleton instance
    this.singletonInstance = MySingleton.getInstance();
  }

  handleButtonClick = () => {
    // Call methods of the singleton instance
    this.singletonInstance.myMethod();
    this.singletonInstance.anotherMethod();
  };

  render() {
    return (
      <View>
        <Text>React Native Singleton Example</Text>
        <Button title="Call Singleton Methods" onPress={this.handleButtonClick} />
      </View>
    );
  }
}


