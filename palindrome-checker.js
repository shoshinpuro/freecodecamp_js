function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g,'');
  let val = str.length/2;
  let secondPart = (Array.from(str.slice(Math.round(val))).reverse()).join('');
  let firstPart = str.slice(0, Math.floor(val));
  console.log(secondPart);
  console.log(firstPart);
  return secondPart == firstPart;
}

palindrome("1 eye for of 1 eye.");