const uniteUnique = ( ...arrays) => {

  const combined = [].concat(...arrays);
  
  return [...new Set(combined)];
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]))