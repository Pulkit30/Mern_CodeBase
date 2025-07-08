// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../../user/model/user.model.js";

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  const users=getAllUsers()
  const userIndex=users.findIndex((user)=>user.id==userId)
  if(userIndex==-1){
    return {
      "success": false,
      "msg": "user not found"
    }  
  }
  const prod=users.find((product)=>product.id==productId)
  if(!prod){
    return {
      "success": false,
      "msg": "product not found"
  }
  }
  if(!(rating>=0 && rating<=5)){
    return {
      "success": false,
      "msg": "rating should be b/w 0 and 5"
  }
 }
  if(prod['ratings']){
    const userRatingIndex=prod['ratings'].findIndex(userRating=>userRating.userId==userId)
    if(userRatingIndex==-1){
      prod['ratings'].push({
        "rating":rating,
        "userId":userId
      })
    }
    else{
      prod['ratings'][userRatingIndex]['rating']=rating
    }
  }
  else{
    prod['ratings']=[{
      "rating":rating,
      "userId":userId
    }]
  }
  return {
    "success": true,
    "msg": prod
   } 
}
  
  
