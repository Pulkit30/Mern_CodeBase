// Inheritance
class Vehicle {
  //constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //methods
  getDetails() {
    console.log(`
      The ${this.name} is ${this.color} in color.
      It has ${this.wheels} wheels.
      `);
  }
}

class Car extends Vehicle {
  constructor(color, brand, purpose) {
    super("car", color, 4);
    this.brand = brand;
    this.purpose = purpose;
  }
  getDetails() {
    console.log(`
      The ${this.name} is ${this.color} in color of ${this.brand} company.
      It is for the ${this.purpose}
      `);
  }
}

const car1 = new Car("Red", "Audi", "Luxury Travelling");

car1.getDetails();
console.log(car1);
console.log(car1.__proto__);
const veh1 = new Vehicle("Maruti", "white", 4);
console.log(veh1);
console.log(veh1.__proto__);

