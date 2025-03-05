//complete the calculatePrice function
//Do not alter the starter code
const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};
function calculatePrice(goods) {
  // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;
    let totalPrice=0
  // Hint 2: Use a for-in loop to iterate over the properties (items) in the goods object
  // for (let item in goods) { ... }
    for (let item in goods){
        totalPrice+=goods[item]['price']*goods[item]['quantity']
    }
    //destructing example
    // let {price,quantity}=goods[item]
    // totalPrice=price*quantity

  // Hint 3: Use object destructuring to extract the price and quantity of each item

  // Hint 4: Calculate the total price for each item and add it to the totalPrice
return totalPrice
  // Hint 5: Return the totalPrice after the loop
}
console.log(calculatePrice(goods));
//output : 650
