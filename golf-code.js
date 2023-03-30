const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let arr = [1, par-2, par-1, par, par+1, par+2, par+3]
  if(arr.indexOf(strokes) != -1){
    return names[arr.indexOf(strokes)];
  } else if(strokes < arr[1]){
    return names[1];
  } else {
     return names[6];
  }
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);