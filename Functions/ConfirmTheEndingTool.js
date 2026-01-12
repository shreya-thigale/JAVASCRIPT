const confirmEnding = (str1, str2) => {
  if (str1.slice(-str2.length) === str2){
    return true;
  }else{
    return false;
  }
};

console.log(confirmEnding("Bastian", "n"));