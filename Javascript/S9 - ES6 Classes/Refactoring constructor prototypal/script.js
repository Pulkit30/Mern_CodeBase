function main() {
    // Constructor function
    function Car(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.getMake = function () {
            return this.make;
        };
    }

    // Moving these methods to the prototype (since they were in the class as prototype methods)
    Car.prototype.getModel = function () {
        return this.model;
    };

    Car.prototype.getYear = function () {
        return this.year;
    };

    Car.prototype.getColor = function () {
        return this.color;
    };

    Car.prototype.getMileage = function () {
        return this.mileage;
    };

    // Creating an instance
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);

    // Testing the methods
    console.log(myCar.getModel());   // Output: Camry (prototype method)
    console.log(myCar.getYear());    // Output: 2020 (prototype method)
    console.log(myCar.getColor());   // Output: blue (prototype method)
    console.log(myCar.getMileage()); // Output: 5000 (prototype method)

    // Do not modify the return statement
    return Car;
}

main();
