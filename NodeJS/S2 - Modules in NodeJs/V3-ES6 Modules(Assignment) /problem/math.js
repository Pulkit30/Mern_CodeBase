// math.js - a CommonJS module for performing calculations on a set of numbers

export function sum(nums) {
  return nums.reduce((total, num) => total + num, 0);
}

export function mean(nums) {
  return sum(nums) / nums.length;
}
function_name=()=>{
   console.log('india')
}
function_name()

// module.exports = {
//   sum: sum,
//   mean: mean,
// };
