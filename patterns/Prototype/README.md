# Prototype Design Pattern


The Prototype Design Pattern is a creational pattern that enables the creation of new objects by copying an existing object. Prototype allows us to hide the complexity of making new instances from the client. The concept is to copy an existing object rather than create a new instance from scratch, something that may include costly operations. The existing object acts as a prototype and contains the state of the object.

Prototype Pattern in JavaScript

It promotes the creation of objects without specifying the exact class of object to create. This pattern is particularly useful when you want to create instances of complex objects efficiently.

Below is an example of how to implement and use the prototype pattern in JavaScript.

```javascript

// Prototype object
const vehiclePrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
  },
  getDetails() {
    return `${this.make} ${this.model}`;
  },
};

// Create new instances using the prototype
const car1 = Object.create(vehiclePrototype);
car1.init('Toyota', 'Camry');

const car2 = Object.create(vehiclePrototype);
car2.init('Honda', 'Civic');

console.log(car1.getDetails()); // Output: 'Toyota Camry'
console.log(car2.getDetails()); // Output: 'Honda Civic'

```

<br>

Below is an explanation of the above code.

### 1. Prototype object

```javascript

const vehiclePrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
  },
  getDetails() {
    return `${this.make} ${this.model}`;
  },
};

```

First of all, we upgrade on it to Item class which will function as a means of access to our items. And, in case of Java and TypeScript, we would apply an interface that is not available in JavaScript; therefore, we use a base class. This place shows a constructor that uses the name of the item as an argument and the display() function which displays the item name. 

<br>

*In this part of the code, an object called vehiclePrototype is defined, which acts as a prototype for other objects of type vehicle.*
*The vehiclePrototype object has two methods: init and getDetails.*
*The init method is used to initialize the make and model properties of the object.*
*The getDetails method returns a string containing the vehicle details, such as the make and model.*

<br>

### 2. Create new instances using the prototype

```Javascript

class ConcreteItem1 extends Item {
    constructor() {
        super("ConcreteItem1");
    }
}

class ConcreteItem2 extends Item {
    constructor() {
        super("ConcreteItem2");
    }
}

```

In this part of the code, new vehicle instances (car1 and car2) are created using the Object.create() method.
The vehiclePrototype object is passed as an argument to Object.create(), which sets the prototype of the new created object to vehiclePrototype.
The init() method is then called on each instance to initialize the make and model properties with specific values.



### 3. Logging details of each instance

```Javascript

class Creator {
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


```

<br>

*The getDetails() methods are used on each instance (car1 and car2) to obtain and record the details of each vehicle in the console.*



<br>

In this example, vehiclePrototype acts as a common prototype for all objects of type vehicle, and new vehicle instances (car1 and car2) can be created using this prototype as a base.
<br>
<br>

# Resouces

1. [Java Script Code example](./Prototype.js)  

# References

<br>

1. [GeeksforGeeks - Prototype Pattern](https://www.geeksforgeeks.org/prototype-design-pattern/)

<br>

2. [Alex Merced - Prototype Pattern](https://dev.to/alexmercedcoder/oop-design-patterns-in-javascript-3i98)