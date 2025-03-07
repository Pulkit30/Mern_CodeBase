// let a = 10;
// {
//   console.log(a);
//   let a = 20;
// }
let a = 10;
function print() {
  let a;
  console.log(a);
}
print();
console.log(a);

// var b = "p";
// if (false) {
//   var b = "h1";
// } else {
//   var c = "i";
// }
// console.log(b, c);
// let obj = { name: "p" };
// console.log(r);

// let a = 1;
// function b() {
//   a = 10;
//   return;
// }
// b();
// console.log(a);
//The function a() inside b() is hoisted, meaning a inside b() becomes a local variable rather than modifying the global a.

// let a = 1;
// function b() {
//   a = 10;
//   return;
//   let a = 23;
// }
// b();
// console.log(a);
