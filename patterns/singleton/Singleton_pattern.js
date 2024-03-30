// SingletonExample.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MySingleton {
  constructor() {
    if (MySingleton.instance) {
      return MySingleton.instance;
    }
    MySingleton.instance = this;

    // Initialize properties
    this.myProperty = "Initial Value";
  }

  // Instance method example
  myMethod() {
    console.log('Singleton method has been called.');
  }

  // Another instance method example
  anotherMethod() {
    console.log('Another method of the Singleton has been called.');
  }

  // Static method to get instance
  static getInstance() {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  }
}

class SingletonExample extends Component {
  constructor(props) {
    super(props);

    // Get the Singleton instance
    this.singletonInstance = MySingleton.getInstance();
  }

  render() {
    return (
      <View>
        <Text>Singleton Example Component</Text>
        <Text>Property value: {this.singletonInstance.myProperty}</Text>
        <Button
          title="Call Singleton Method"
          onPress={() => this.singletonInstance.myMethod()}
        />
      </View>
    );
  }
}

export default SingletonExample;

