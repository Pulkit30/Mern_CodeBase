//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function findDuplicate(arr) {
//   let count = {};
//   let duplicates = new Set();
//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   for (let num in count) {
//     if (count[num] > 1) {
//       duplicates.add(Number(num));
//     }
//   }
//   return [...duplicates];
// }
function findDuplicate(arr){
    return [...new Set(arr.filter((num, i, a) => a.indexOf(num) !== i))];
}
console.log(findDuplicate(arr));
