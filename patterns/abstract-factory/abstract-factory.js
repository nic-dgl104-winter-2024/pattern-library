class Item {
    constructor(name) {
        this.name = name;
    }

    // Method to display the Item name
    display() {
        console.log(`Item: ${this.name}`);
    }
}

// ConcreteItem1 class
class ConcreteItem1 extends Item {
    constructor() {
        super("ConcreteItem1");
    }
}

// ConcreteItem2 class
class ConcreteItem2 extends Item {
    constructor() {
        super("ConcreteItem2");
    }
}


// Factory method returns an instance of ConcreteItem based on the type passed as a parameter. 
// The type is used to determine which ConcreteItem subclass to return. 
// This allows the Creator class to be independent of the ConcreteItem subclasses. 
// The Creator class is responsible for creating the ConcreteItem instances.

class Creator {
    // Factory method 
    createItem(type) {
        let item;
        switch (type) {
            case "type1":
                item = new ConcreteItem1();
                break;
            case "type2":
                item = new ConcreteItem2();
                break;
            default:
                throw new Error("Invalid Item Type");
        }
        return item;
    }
}

// Usage method for creating ConcreteItem instances based on the type passed as a parameter
const creator = new Creator();
const item1 = creator.createItem("type1");
item1.display(); 
// Output: Item: ConcreteItem1

const item2 = creator.createItem("type2");
item2.display(); 
// Output: Item: ConcreteItem2

/* 
References



1. [GeeksforGeeks - Abstract Factory Pattern](https://www.geeksforgeeks.org/abstract-factory-pattern/)


2. [Refactoring Guru - Abstract Factory Design Pattern](https://refactoring.guru/design-patterns/abstract-factory)
 */