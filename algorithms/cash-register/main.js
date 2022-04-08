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

  let drawerAmt = cid
    .reduce((previous, current) => previous.concat(current))
    .filter(element => typeof element === "number")
    .reduce((previous, current) => previous + current);

  const sortedCid = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    sortedCid.push(cid[i]);
  }
  
  // Use forEach to count back change from cid
  sortedCid.forEach(arr => {
    const amt = 1;
    const unit = 0;
    
    if (arr[amt] <= change && arr[amt] > 0) {
      arr[amt] -= currency[arr[unit]];
      drawerAmt -= currency[arr[unit]];
      change -= currency[arr[unit]];
    }
  });
  
  // Check for sufficient funds and update register stats
  if (change > 0) {
    register.status = "INSUFFICIENT_FUNDS";
  } else if (change === drawerAmt) {
    register.status = "CLOSED";
    register.change = cid;
  }

  return register;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])