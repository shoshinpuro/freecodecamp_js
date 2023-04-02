function checkCashRegister(price, cash, cid) {
  let totalAtCheckout = 0;
  let due = cash-price;
  let nominals = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

  let dueArr = [];
  cid.reverse().forEach((val, i)=>{
    if(due <= nominals[i] && due%nominals[i]==0){
      let newDue = due;
      let valSize = val[1]
      while(valSize>0 || newDue != 0){
        valSize -= nominals[i];
        newDue -= nominals[i];
      }
      
    }
    totalAtCheckout += val[1];
  })
  if(totalAtCheckout == due){
    return {status: "CLOSED", change: cid};
  } else if(dueArr != []){
    return {status: "OPEN", change: [dueArr]}
  } else{
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  let change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);