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