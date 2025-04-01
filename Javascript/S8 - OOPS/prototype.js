function Movie(title) {
  this.title = title;
}

const movie1 = new Movie("The Avengers");

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");
console.log(movie2);
console.log(movie2.__proto__.__proto__);

let a1 = {};
console.log(a1);
console.log(a1.__proto__);
