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
