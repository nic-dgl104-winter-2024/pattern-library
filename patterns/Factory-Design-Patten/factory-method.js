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

// Pizza Class
function Pizza() {
    this.famousAudience = "youngers!";
}

// Burger Class
function Burger() {
    this.famousAudience = "Kids!";
}

// Salad Class
function Salad() {
    this.famousAudience = "elders!";
}

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