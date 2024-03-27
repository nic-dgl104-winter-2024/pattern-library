# Factory Design Pattern

The Factory method is one of the most widely used design patterns. It functions as an interface for making objects that are modifiable after they are created. The difficulty creating objects without depending on the traditional constructor technique is addressed by this pattern. Rather, it creates the newly desired object based on the configuration or description that it receives (Cocca, 2022).


In JavaScript, calling a constructor function with the new operator is a common way to create an object. Nevertheless, there are situations in which the client doesn't know or shouldn't be concerned with which of multiple possible objects to create. The value of the Factory Method resides in its ability to enable the client to assign object creation while retaining control over the kind of object that is instantiated (Poorte, 2023).

## Diagram
![javascript-factory-method](https://github.com/nazrinzuwair/pattern-library/assets/144160072/f5ab27dc-bd49-4c0b-9fed-92bce6f7df4d)

The following entities are involved in this pattern when implementing using JavaScript:

   - Creator: This corresponds to the factory object in the provided visual representation, responsible for producing new products. It implements the factoryMethod, which yields freshly generated products.

   - Concrete Product: These are the products being created, where each product adheres to the same interface, comprising identical attributes and operations.

   - Abstract Product: This role is not commonly used in JavaScript. Traditionally, it would declare a product interface for various programming languages or scenarios. However, JavaScript does not specify interfaces explicitly. Instead, actual objects typically implement the relevant properties and methods directly, eliminating the need for an abstract product interface.

(Poorte, 2023)

## Example demonstrating the Factory Method pattern in JavaScript:

### Factory Function for Creating Foods

The `FoodFactory` function serves as a factory for creating different types of foods, demonstrating the Factory Design Pattern. It contains a method `createFood` that takes a type as input and returns a corresponding `food` object. This approach abstracts the process of object creation, allowing the client code to create `food` objects without knowing the specific type being instantiated.

```javascript
// Factory Function for Creating Foods
function FoodFactory() {
    // Method to create different types of foods based on input type
    this.createFood = function(type) {
        let food;
        
        // Create different foods based on the type provided
        if (type === "pizza") {
            food = new Pizza();
        } else if (type === "burger") {
            food = new Burger();
        } else if (type === "salad") {
            food = new Salad();
        }
        
        // Add common properties and methods to all created foods
        food.type = type;
        food.famousTo = function() {
            console.log("The " + this.type + " is famous among: " + this.famousAudience);
        }
        
        return food;
    }
}
```
### `Pizza` Class 

The `Pizza` class represents a type of food created by the `FoodFactory` factory function. It encapsulates the properties and behavior specific to pizza objects. By being created through the `FoodFactory`, the `Pizza` class adheres to the Factory Design Pattern, where the factory method (`createFood`) is responsible for creating instances of concrete classes (`Pizza`) without exposing the instantiation logic.

```javascript
// Pizza Class
function Pizza() {
    this.famousAudience = "youngers!";
}
```

### `Burger` Class 

The `Burger` class represents another type of food created by the `FoodFactory` factory function. Similar to the `Pizza` class, it encapsulates the properties and behavior specific to burger objects. The instantiation of `Burger` objects through the `FoodFactory` aligns with the Factory Design Pattern, abstracting the object creation process and providing a common interface for creating different types of foods.

```javascript
// Burger Class
function Burger() {
    this.famousAudience = "Kids!";
}
```

### `Salad` Class 

The `Salad` class represents yet another type of food created by the `FoodFactory` factory function. It encapsulates the properties and behavior specific to salad objects. As with the `Pizza` and `Burger` classes, the instantiation of `Salad` objects through the `FoodFactory` adheres to the Factory Design Pattern, promoting encapsulation and decoupling by separating the client code from the object creation logic.

```javascript
Copy code
// Salad Class
function Salad() {
    this.famousAudience = "elders!";
}
```

### Run function to execute the program

The `run()` function is invoked to demonstrate the usage of the Factory Method pattern. Within this function, a `FoodFactory` instance is created to produce different types of foods. Each food type (`pizza`, `burger`, `salad`) is created using the factory method `createFood()` of the `FoodFactory`. This showcases the core principle of the Factory Method pattern, where object creation is delegated to a factory object, allowing the client code to create objects without specifying their concrete classes.

```javascript
// Run function to demonstrate the usage of the Factory Method
function run() {
    let foods = [];
    let foodFactory = new FoodFactory();
    
    // Create different foods using the factory
    foods.push(foodFactory.createFood("pizza"));
    foods.push(foodFactory.createFood("burger"));
    foods.push(foodFactory.createFood("salad"));
    
    // Make the foods speak
    for (let i = 0; i < foods.length; i++) {
        foods[i].famousTo();
    }
}

// Execute the run function
run();
```
Idea extracted from (Harsh, 2023). Factory Method. Retrieved from [Kinsta Blog](https://kinsta.com/blog/javascript-design-patterns/#2-factory-method)

### Output

```
The pizza is famous among: youngers!
The burger is famous among: Kids!
The salad is famous among: elders!
```


## Implementing Factory Method Pattern in Various Programming Languages

The Factory Method pattern can be implemented in various programming languages apart from JavaScript. Here's a list of some of the additional programming languages where you can implement the Factory Method pattern:

1. [Python](https://refactoring.guru/design-patterns/factory-method/python/example#:~:text=Factory%20method%20is%20a%20creational,constructor%20call%20(%20new%20operator).)
2. [Java](https://www.geeksforgeeks.org/factory-method-design-pattern-in-java/)
3. [C++](https://www.geeksforgeeks.org/factory-method-for-designing-pattern/)
5. [Ruby](https://refactoring.guru/design-patterns/factory-method/ruby/example)
5. [PHP](https://sourcemaking.com/design_patterns/factory_method/php/1)


# References

Cocca, G. (2022, June 22). Factory Method Pattern. Retrieved from freeCodeCamp: https://www.freecodecamp.org/news/javascript-design-patterns-explained/#factory-method-pattern

GeeksforGeeks. (2024, February 28). Factory method design pattern in Java. Retrieved from GeeksforGeeks: https://www.geeksforgeeks.org/factory-method-design-pattern-in-java/

GeeksforGeeks. (n.d.). Factory method for designing pattern. Retrieved from GeeksforGeeks: https://www.geeksforgeeks.org/factory-method-for-designing-pattern/

Guru, R. (2024). Factory Method in Python. Retrieved from Refactoring Guru: https://refactoring.guru/design-patterns/factory-method/python/example#:~:text=Factory%20method%20is%20a%20creational,constructor%20call%20(%20new%20operator).

Guru, R. (n.d.). Factory Method in Ruby. Retrieved from Refactoring Guru: https://refactoring.guru/design-patterns/factory-method/ruby/example

Harsh, K. (2023, October 23). Factory Method. Retrieved from Kinsta: https://kinsta.com/blog/javascript-design-patterns/#2-factory-method

Poorte, J. (2023, September 30). JavaScript Factory Method Design Pattern. Retrieved from doFactory: https://www.dofactory.com/javascript/design-patterns/factory-method
SourceMaking. (n.d.). Factory Method in PHP. Retrieved from SourceMaking: https://sourcemaking.com/design_patterns/factory_method/php/1


