// Factory Function for Creating Foods
function FoodFactory() {
    // Method to create different types of foods based on input type
    this.createFood = function(type) {
        let food;
        
        // Create different foods based on the type provided
            switch(type) {
                case "pizza":
                    food = new Pizza();
                    break;
                case "burger":
                    food = new Burger();
                    break;
                case "salad":
                    food = new Salad();
                    break;
                default:
                    // Handle default case if necessary
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
    this.famousAudience = "youngsters!";
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
