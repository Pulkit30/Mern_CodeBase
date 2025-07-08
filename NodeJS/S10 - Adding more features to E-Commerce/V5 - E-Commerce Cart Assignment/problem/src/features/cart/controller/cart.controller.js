// Please don't change the pre-written code
// Import the necessary modules here

import { addToCart, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const { productId, quantity } = req.query;
  const userId = req.userId;
  const cartItems = addToCart(userId, productId, quantity);
  return res.status(200).send({ success: true, item: cartItems });
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const cartId  = req.params.itemId;
  const cart = removeFromCart(req.userId, cartId);
  if (cart) {
    res.status(200).json({
      success: true,
      deletedCartItem: cart,
    });
  } else {
    res.status(400).json({
      success: false,
      msg: "operation not allowed",
    });
  }
};
