/*let amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);
*/


let itemPrices = [61.00, 52.25, 112.99, 5.00];
let totalBill = 0;
for (let amount of itemPrices) {
  totalBill += amount;
}
console.log('Order total is: ' + totalBill + ".");

let name = 'Michael'
for (let characters of name) {
  console.log(characters)
}