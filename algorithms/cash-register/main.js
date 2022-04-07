const currency = {
  penny : 0.01,
  nickel : 0.05,
  dime : 0.1,
  quarter : 0.25,
  one : 1,
  five : 5, 
  ten : 10, 
  twenty : 20, 
  "one hundred" : 100,
};

const register = {
  status: "",
  change: []
};

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let drawerAmt = 0;

  cid.forEach(currency => {
    const amt = 1;
    drawerAmt += currency[amt];
  });

  if (drawerAmt < changeDue) {
    register.status = "INSUFFICIENT_FUNDS";  
  } else if (drawerAmt === changeDue) {
    register.status = "CLOSED";
    register.change = cid;
  } 
  
  return register;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);