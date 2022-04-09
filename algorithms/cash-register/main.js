const currency = {
  "ONE HUNDRED" : 100,
  "TWENTY" : 20,
  "TEN" : 10,
  "FIVE" : 5, 
  "ONE" : 1,
  "QUARTER" : 0.25,
  "DIME" : 0.1,
  "NICKEL" : 0.05,
  "PENNY" : 0.01,
};

const register = {
  status: "",
  change: []
};

function checkCashRegister(price, cash, cid) {
  let change = cash - price; 
  
  const cidClone = JSON.parse(JSON.stringify(cid)); 

  const sortedCid = [];
  for (let i = cidClone.length - 1; i >= 0; i--) {
    sortedCid.push(cidClone[i]);
  }

  let drawerAmt = sortedCid
    .reduce((previous, current) => previous.concat(current))
    .filter(element => typeof element === "number")
    .reduce((previous, current) => previous + current);
  
  // Use forEach to count back change from cid and track amount in drawer
  sortedCid.forEach(arr => {
    const unit = 0;
    const amt = 1;
    let total = 0;
    
    while (
      currency[arr[unit]] <= change.toFixed(2) && 
      arr[amt] > 0   
      ) {
      arr[amt] -= currency[arr[unit]];
      drawerAmt -= currency[arr[unit]];
      change -= currency[arr[unit]];
      
      total += currency[arr[unit]];
      register.change.push([arr[unit], total])
    }
  });
  
  //console.log(sortedCid)

  // Check for sufficient funds and update register stats
  if (change.toFixed(2) > 0) {
    register.status = "INSUFFICIENT_FUNDS";
    register.change = []; 
  } else if (
    Math.round(change).toFixed(2) === 
    Math.round(drawerAmt).toFixed(2)
    ) {
    register.status = "CLOSED";
    register.change = cid;
  } else {
    register.status = "OPEN";
  }

  console.log(register)
  return register;
}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])