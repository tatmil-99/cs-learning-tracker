function checkCashRegister(price, tender, cid) {
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

  const cidSorted = [];
  const cidClone = JSON.parse(JSON.stringify(cid)); 

  for (let i = cidClone.length - 1; i >= 0; i--) {
    cidSorted.push(cidClone[i]);
  }

  let drawerAmt = cidSorted
    .reduce((previous, current) => {
      return previous.concat(current)
    })
    .filter(element => {
      return typeof element === "number"
    })
    .reduce((previous, current) => {
      return previous + current
    });

  let difference = tender - price; 

  cidSorted.forEach(tender => {
    const unit = 0;
    const amt = 1;

    let change = 0;

    // Track state of cid and amt of change to return 
    while (
      currency[tender[unit]] <= 
      difference.toFixed(2) && 
      tender[amt] > 0   
      ) {
      tender[amt] -= currency[tender[unit]];
      drawerAmt -= currency[tender[unit]];
      difference -= currency[tender[unit]]; 
      change += currency[tender[unit]];
    }

    if (change > 0) {
      register.change.push([tender[unit], change]);
    }
  });
  
  // Check for sufficient funds and update register status
  if (difference.toFixed(2) > 0) {
    register.status = "INSUFFICIENT_FUNDS";
    register.change = []; 
  } else if (
    Math.round(difference).toFixed(2) === 
    Math.round(drawerAmt).toFixed(2)
    ) {
    register.status = "CLOSED";
    register.change = cid;
  } else {
    register.status = "OPEN";
  }
  
  return register;
}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // should return {status: "OPEN", change: [["QUARTER", 0.5]]}. 

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.