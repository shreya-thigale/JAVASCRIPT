const maskEmail = (email) => {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  const mask = "*".repeat(username.length - 2);

  const result = firstChar + mask + lastChar + domain;
  
  return result;
}

const email = "abcd@xyz.com";
console.log(maskEmail(email));