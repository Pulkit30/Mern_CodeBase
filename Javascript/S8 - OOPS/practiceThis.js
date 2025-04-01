const name = "Alice";
// const person = {
//   name: "John",
//   greet: function () {
//     console.log(this);
//     const innerFunction = function () {
//       const innerFunc = () => {
//         console.log(`Hello, ${this.name}`);
//       };
//       innerFunc();
//     };
//     innerFunction();
//   },
// };
// person.greet();

// vs //

// const person = {
//   name: "John",
//   greet: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(`Hello, ${this.name}`);
//     };
//     innerFunc();
//   },
// };
// person.greet();

// vs

const person = {
  name: "John",
  greet: () => {
    console.log(this);
    console.log(`Hello, ${this.name}`);
  },
};
person.greet();
