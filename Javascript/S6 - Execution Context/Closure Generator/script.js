// Complete the genrateID function
//Do not alter the starter code

function generateID(val) {
  let val1 = "A_2023_";
  return function () {
    return val1 + val++;
  };
  //Implement Your function here
}

const func = generateID(99);
console.log(func()); //Output : A_2023_99
console.log(func()); // Output: A_2023_100
