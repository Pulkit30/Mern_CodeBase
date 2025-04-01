// Note:  Please do not change the pre-written code

// import the required module here
const mathModule=require('./math.js')
const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    console.log(`The Sum is ${mathModule.sum(nums)}`)
    console.log(`The Sum is ${mathModule.mean(nums)}`)
    // write your code here to Display the results of the calculations on the console.

};
Solution();
module.exports = Solution;
