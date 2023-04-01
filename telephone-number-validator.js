function telephoneCheck(str) {
  let newStr = str.replace(/-/g, '');
  newStr = newStr.replace(/\(/g, '');
  newStr = newStr.replace(/\)/g, '');
  newStr = newStr.replace(/ /g, '');
  newStr = newStr.replace(/1/, '');
  let firstNum;
  let add = 0;
  let x = 2;
  if(str[0]!='1'){
    x -= 2;
  }
  if(str[x]=='('){
      add++;
    }
    let substr = str.slice(x+add, x+3+add);
    firstNum = substr.match(/[0-9]/g);
    console.log(firstNum);

  if(str[0]!= '-' && firstNum.length == 3 &&
  (str[0]=='(' ? str[4]==')':
  str.split('(').length==str.split(')').length) && 
  newStr.length == 10){
    return true;
  } else{
    return false;
  }
}

telephoneCheck("55 55-55-555-5");