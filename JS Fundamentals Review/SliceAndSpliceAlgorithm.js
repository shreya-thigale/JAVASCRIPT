function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  localArray.splice(n, 0, ...arr1); 
  return localArray;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

console.log(frankenSplice([1, 2], ["a", "b"], 1));