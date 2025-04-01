// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");
const Solution = () => {
  try {
    fs.writeFileSync("notes.txt", "The world has enough coders ");
  } catch (err) {
    console.log(err);
  }
  const buffer = fs.readFileSync("notes.txt", "utf8");
  console.log(buffer);
  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  const buffer1 = fs.readFileSync("notes.txt", "utf8");
  console.log(buffer1);
  // Write your code here
};
Solution();
module.exports = Solution;
