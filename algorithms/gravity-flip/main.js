/* Store each columns qty in an object for reference. 

Start at "d" and while less than a.length - 1, for each
column, add the difference while less than largest "columnQty" prop and 
subtract the number taken from the respective column(s), then
iterate and reference the next largest obj prop name. 

Return arr. */


const columnQty = {

}

function flip(d, a) {
  storeColumnVals(a);
  
  console.log(columnQty);
}

function storeColumnVals(a) {
  const sorted = a.sort((a, b) => b - a);
  Object.assign(columnQty, sorted);
}