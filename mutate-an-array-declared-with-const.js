const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
   s[0] = s.splice(1,1, s[0])[0];
   s[2] = s.splice(0,1, s[2])[0]
  // Only change code above this line
  console.log(s)
}
editInPlace();