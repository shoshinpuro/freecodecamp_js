function checkCashRegister(price, cash, cid) {
  let due = cash-price;
  let nominals = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let cidSum = 0;
  let dueObj = {};
  cid.reverse().forEach((val, i)=>{
    cidSum += val[1];
    if(due >= nominals[i]){
      let valSize = val[1];
      let sum = 0;
      while(valSize > 0 && due >= nominals[i]){
        sum = +(sum + nominals[i]).toFixed(2);
        valSize = +(valSize - nominals[i]).toFixed(2);
        due = +(due - nominals[i]).toFixed(2);
        dueObj[val[0]] = sum;
      }
    }
  });
  if((cash-price)==cidSum){
    return {status: "CLOSED", change: cid.reverse()};
  } else if(Object.keys(dueObj).length != 0 && due == 0){
    return {status: "OPEN", change: Object.entries(dueObj)}
  } else{
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);