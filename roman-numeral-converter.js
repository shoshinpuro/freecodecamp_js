function convertToRoman(num) {
  let roman = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let newNum = '';
  while(num>0){
    for(let val in roman){
      console.log(num);
      console.log(roman[val]);
      if(num >= roman[val]){
        newNum += val;
        console.log(newNum);
        num -= roman[val];
        break;
      }
    }
  }
 return newNum;
}

convertToRoman(36);