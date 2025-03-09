const car = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
};

const car1 = Object.create(car);
console.log(car, car1);
console.log(car1.__proto__);

car1.getDetails("Audi");

const car2 = Object.assign(car);
console.log(car2);

//Object.assign
