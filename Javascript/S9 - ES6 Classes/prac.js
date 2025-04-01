// Inheritance
class Vehicle {
  //constructor
  wheels = 4;
  constructor(brand) {
    this.brand = brand;
  }
  //methods
  startEngine() {
    console.log("Starting..");
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  getWheels() {
    //console.log(super.wheels);
    console.log(this.wheels);
  }
}
const veh1 = new Vehicle("skoda");
console.log(veh1);

const myCar = new Car("Toyota", "camry");
myCar.getWheels();
