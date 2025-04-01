const car = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
  type: "sudan",
};

const car1 = Object.create(car);
console.log(car, car1);
console.log(car1.__proto__);
console.log(car1.type);
car1.type = "SUZUKI";
console.log(car1);
console.log(car);
console.log(car.type, car1.type);

car1.getDetails("Audi");

const car2 = Object.assign(car);
console.log(car2);

Object.assign;

const c1 = Object.assign({}, car);
console.log(c1);
