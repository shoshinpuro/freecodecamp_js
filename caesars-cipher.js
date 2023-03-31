function rot13(str) {
  let arr = Array.from(str);
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let i in arr) {
    let index = alphabet.indexOf(arr[i]);
    if(index !== -1){
      let newIndex = (index+13)%26;
      arr[i] = alphabet[newIndex];
    }
  }
  return arr.join('');
}

rot13("SERR PBQR PNZC");