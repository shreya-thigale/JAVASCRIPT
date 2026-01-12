function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let cappedWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(cappedWord);
  }

  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));