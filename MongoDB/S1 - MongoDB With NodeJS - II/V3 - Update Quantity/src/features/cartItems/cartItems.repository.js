import { ObjectId } from 'mongodb';
import { getDB } from '../../config/mongodb.js';

export default class CartItemsRepository{
    constructor(){
        this.collection = "cartItems";
    }


    async add(productID, userID, quantity){
        try{
        const db = getDB();
        const collection = db.collection(this.collection);
        // find the document 
        // either insert or update
        // Insertion.
        await collection.updateOne(
            {productID: new ObjectId(productID), userID: new ObjectId(userID)},
            {$inc:{
                quantity: quantity
            }},
            {upsert: true}) 
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async get(userID){
        try{
        const db = getDB();
        const collection = db.collection(this.collection);
        return await collection.find({userID: new ObjectId(userID)}).toArray();
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async delete(userID, cartItemID){
        try{
        const db = getDB();
        const collection = db.collection(this.collection);
        const result = await collection.deleteOne({_id: new ObjectId(cartItemID), userID:  new ObjectId(userID)});
        return result.deletedCount>0;
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }
}