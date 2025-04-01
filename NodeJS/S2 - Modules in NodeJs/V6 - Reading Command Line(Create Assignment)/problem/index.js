// Import required module
const readline = require("readline");
const Solution = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the First Number", (num1) => {
    rl.question("Enter the Second Number", (num2) => {
      if (Number(num1) > Number(num2)) {
        console.log(`The maximum of two numbers is: ${num1}`);
      } else {
        console.log(`The maximum of two numbers is: ${num2}`);
      }
    });
  });
  // Write your code here
};

Solution();
module.exports = Solution;
