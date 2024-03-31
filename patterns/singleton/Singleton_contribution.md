
# DGL 104 - Community code project contribution report - Part two

## ✨ Purpose

This document comprehensively outlines our contributions towards resolving the issue at hand, along with detailing the development process that led to an exceptional outcome. We have included content from all our previous closed Pull requests, encompassing any singleton pattern files or contributions, as well as the README file. Additionally, we will highlight our involvement in creating an informative and comprehensible README file for this issue.

Since we are three students collaborating on this task, we will break down what each of us did from the beginning to the end in easy-to-understand terms. We will start with what we had in the initial pull request and then move on to the final result.

----

## ✨Contributors

* Baljit Singh
* Anjitha Karuthara Balakrishnan
* Sandhya Basran
----
----

### ✨ Forked Repository - [Pattern Library](https://github.com/BasranS/pattern-library/tree/react_native_development/patterns/singleton)

### ✨ Issue - [Add React Native implementation for Singleton pattern](https://github.com/nic-dgl104-winter-2024/pattern-library/issues/8)

### *Task : The objective of this issue is to integrate the Singleton design pattern with React Native.*

----
----

## ✨ Baljit Singh - Old pull request outcome

In his initial pull request, Baljit Singh, submitted this code under the filename "singleton.js".

```javascript
function MySingleton() {
    if (typeof MySingleton.instance === 'object') {
      return MySingleton.instance;
    }
    MySingleton.instance = this;

    // Initialize properties
    this.myProperty = "Initial Value";

    // Instance method example
    this.myMethod = function() {
      console.log('Singleton method has been called.');
    };
  }

  // Static method to get instance
  MySingleton.getInstance = function() {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  };

  // Another instance method example
  MySingleton.prototype.anotherMethod = function() {
    console.log('Another method of the Singleton has been called.');
  };

  // Ensure the constructor cannot be called from outside
  Object.freeze(MySingleton);

  // Usage within the same file
  const instance1 = MySingleton.getInstance();
  const instance2 = MySingleton.getInstance();

  console.log(instance1 === instance2); // true, both variables hold the same instance

  // Accessing methods of the Singleton instance
  instance1.myMethod(); // Outputs: Singleton method has been called.
  instance1.anotherMethod(); // Outputs: Another method of the Singleton has been called.

  // Exporting the Singleton if you want to use it in other parts of your application
  export default MySingleton;
```

----
----
## ✨ Anjitha Karuthara Balakrishnan - Old pull request outcome

This code is from the initial pull request of  Anjitha Karuthara Balakrishnan as a outcome for this issue under file name "Singleton.js".

```javascript

class MySingleton {
  static instance;

  // Private constructor to prevent direct construction calls with the new operator.
  constructor() {
    if (typeof MySingleton.instance === 'object') {
      return MySingleton.instance;
    if (MySingleton.instance !== null) {
      throw new Error("Singleton instance already exists. Use getInstance method.");
    }
    MySingleton.instance = this;

    // Initialize properties
    this.myProperty = "Initial Value";

    MySingleton.instance = this;
    Object.freeze(MySingleton.instance); // Ensure the instance is immutable
  }

  // Static method to get instance
// Static method to get instance
  static getInstance() {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  }
  // Instance method example
  myMethod() {
    console.log('Singleton method has been called.');
  }
}
// Ensure the constructor cannot be called from outside
Object.freeze(MySingleton);
// Usage within the same file
const instance1 = MySingleton.getInstance();
const instance2 = MySingleton.getInstance();
console.log(instance1 === instance2); // true, both variables hold the same instance
// Accessing a method of the Singleton instance
instance1.myMethod(); // Outputs: Singleton method has been called.

// Exporting the Singleton if you want to use it in other parts of your application
export default MySingleton;

```
----
----

## ✨ Sandhya Basran - Old pull request outcome

The provided outcome is given by Sandhya Basran as an outcome for the initial pull request under file name "Mysingleton.js" along with a descriptive file which was "contribution.md" to specify everything about react- native and singleton.

```javascript
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
```

----
----

## ✨ Changes Requested from initial PR

* Baljit Singh: After receiving feedback on his initial pull request, Baljit was advised to collaborate with Anjita and Sandhya because his code shared some similarities with Anjita's code.

* Anjitha Karuthara Balakrishnan: The initial pull request feedback suggests to modify the way the code is written as it is similar to regular JavaScript but not React Native. There is an advise if there's a more React Native-specific approach. Also, There are some issues  noticed  in the code and suggest testing it thoroughly, especially focusing on parts like the initial checks in the constructor and the use of Object.freeze.

* Sandhya Basran: The feedback provided from initial pull request found the coding part satisfactory. However, there are some changes suggested for the contribution.md file which is to remove anything not directly related to React Native for the singleton pattern, like the benefits section. Also, advised to properly formatting references in the README file according to MLA or APA style, and using hyperlinks where needed. Additionally, there is recommendations including a relevant example in the README, properly formatted with triple backticks.

----
----

## ✨ Final Outcome

###  Work Done

We received feedbacks on our initial pull requests and worked together to address all the changes requested. This involved making changes and contributions to every file in parts. As a result, we developed a file called Singleton_pattern.js, which now contains our latest and finalized code for implementing the singleton pattern in React Native. Additionally, we created a README file that explains everything about implementing the singleton pattern in React Native. Proper explanation of this topic Why to use for singleton pattern is required with name "Singleton_readme.md". Also, we create this file under name ["Singleton_contribution.md"](https://github.com/nic-dgl104-winter-2024/pattern-library/pull/102/files#diff-54eb7ab7f0213e47979aa159587146d611beace7f8125ff48b1bdf02c3e49b3e) to explain our contribtions.

* Contribution for [Singleton_pattern.js](https://github.com/nic-dgl104-winter-2024/pattern-library/pull/102/files#diff-208f2b77c3d1f613176baed8f41459236850d5af18e85511b17c2496dede4058)

For this part, we meet and discussed about our provided feedbacks and researched from our ends on react-native implementation for singleton pattern. Then we decided to go with the final code which we provided in the "Singleton_pattern.js" file. All the references are included in the Singleton_readme.md file for information.

* Contribution for [Singleton_readme.md](https://github.com/nic-dgl104-winter-2024/pattern-library/pull/102/files#diff-81a32c10935e99a34d714d440765b96736e61833cef70ffb2fd45ae97e0e8754)

For this part, we divided some sections to work upon which are:

1. Baljit Singh : How to use Singleton pattern in react-native, Definition of React-native

2. Anjitha Karuthara Balakrishnan : Key Components of Singleton Pattern, Definition of Singleton pattern

3. Sandhya Basran : Why to use react-native for Singleton pattern, Real-world platform which uses Singleton pattern.

We all worked together for the provided example and the code explanation.


###  *All of us together giving one pull request for this issue from Sandhya Basran forked repository*