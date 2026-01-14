function convertHTML(str) {
  let result = "";

  for (let char of str) {
    switch (char) {
      case "&": result += "&amp;"; break;
      case "<": result += "&lt;"; break;
      case ">": result += "&gt;"; break;
      case '"': result += "&quot;"; break;
      case "'": result += "&apos;"; break;
      default:  result += char; // Keep normal letters as they are
    }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));