const register = {
  status: "",
  change: []
};

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let drawerAmt = 0;

  // Use for loop to check if there is change
  for (let cash of cid) {
    drawerAmt += cash[1];

    if (drawerAmt < change) {
      register.status = "INSUFFICIENT_FUNDS";
    } 
    else if (drawerAmt === change) {
      register.status = "CLOSED";
      register.change = cid;
    } 
    else {

    }
  } 

  return register;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);