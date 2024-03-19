
# Abstract Factory


One common creational pattern in JavaScript is the Factory Method pattern. It defines an interface for creating an object but lets subclasses decide which class to instantiate. This pattern is particularly useful when you have a set of related classes and you want to abstract away the instantiation logic from the client.

Here's an example of the Factory Method pattern in JavaScript:

```javascript

// Define a simple Product interface (here, using a class as JavaScript doesn't have interfaces like Java or TypeScript)

class Product {
    constructor(name) {
        this.name = name;
    }

    // Method to display the product name
    display() {
        console.log(`Product: ${this.name}`);
    }
}

// ConcreteProduct1 class
class ConcreteProduct1 extends Product {
    constructor() {
        super("ConcreteProduct1");
    }
}

// ConcreteProduct2 class
class ConcreteProduct2 extends Product {
    constructor() {
        super("ConcreteProduct2");
    }
}

// Creator class
class Creator {
    // Factory method
    createProduct(type) {
        let product;
        switch (type) {
            case "type1":
                product = new ConcreteProduct1();
                break;
            case "type2":
                product = new ConcreteProduct2();
                break;
            default:
                throw new Error("Invalid Product Type");
        }
        return product;
    }
}

// Usage
const creator = new Creator();
const product1 = creator.createProduct("type1");
product1.display(); // Output: Product: ConcreteProduct1

const product2 = creator.createProduct("type2");
product2.display(); // Output: Product: ConcreteProduct2


```





