function pyramid(char, count, invert) {
  let rows = [];
  for (let i = 1; i <= count; i++) {
    const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
    if (invert) {
      rows.unshift(row);
    } else {
      rows.push(row);
    }
  }
  return "\n" + rows.join("\n") + "\n";
}

console.log(pyramid("o", 4, false));

console.log(pyramid("p", 5, true));