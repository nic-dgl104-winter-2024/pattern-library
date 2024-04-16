
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
  