// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const cartIndex=cartItems.findIndex((cart)=>cart.userId == userId && cart.productId == productId)
  if(cartIndex==-1){
    cartItems.push(new cartModel(userId,productId,quantity))
  }
  else{
    cartItems[cartIndex].quantity=Number(quantity)
  }
  return cartItems
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  const cartIndexId=cartItems.findIndex((cart)=>Number(cart.userId)==Number(userId) && cart.id == cartItemId)

  if(cartIndexId!=-1){
    const cart=cartItems[cartIndexId]
    cartItems.splice(cartIndexId,1)
    return cart
  }
};