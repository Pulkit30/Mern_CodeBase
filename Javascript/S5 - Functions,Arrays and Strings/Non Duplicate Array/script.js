//complete the function mergeArray
//Do not alter the starter code.
arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
  //Implemet your function here
  arr3 = [...arr1, ...arr2];
  return arr3.filter((num, i, arr3) => {
    return arr3.indexOf(num) == i;
  });
  // return [...new Set([...arr1, ...arr2])]; // Set removes duplicates
}
console.log(mergeArray(arr1, arr2));
//Output : [1,2,4,5,7,3,6,9,0]
