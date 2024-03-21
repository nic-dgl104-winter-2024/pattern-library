// Singleton.js

class MySingleton {
  static instance;

  // Private constructor to prevent direct construction calls with the `new` operator.
  constructor() {
    if (typeof MySingleton.instance === 'object') {
      return MySingleton.instance;
    }
    MySingleton.instance = this;

    // Initialize properties
    this.myProperty = "Initial Value";
  }

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
