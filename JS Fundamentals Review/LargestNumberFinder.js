function largestOfAll(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = arr[i][0]; // Start by assuming the first number is the biggest
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    results.push(largestNum);
  }
  return results;
}

console.log(largestOfAll([
  [4, 5, 1, 3], 
  [13, 27, 18, 26], 
  [32, 35, 37, 39], 
  [1000, 1001, 857, 1]
  ])
)

// function largestOfAll(arr) {
//   let results = []; // Array to store the largest numbers

//   for (let i = 0; i < arr.length; i++) {
//     // Math.max finds the largest number
//     // The spread operator (...) expands the sub-array into individual numbers
//     let largest = Math.max(...arr[i]); 
//     results.push(largest);
//   }

//   return results;
// }