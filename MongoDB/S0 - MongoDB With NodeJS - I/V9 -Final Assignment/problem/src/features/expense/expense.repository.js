
import { getDB } from "../../config/mongodb.js";
import {ObjectId} from 'mongodb';
class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    try{
      const db=getDB()
      const collection=db.collection(this.collectionName)
      await collection.insertOne(expense)
      return expense
    }
    catch(error){
      return new Error(error.message)
    }
  }

  // Get one expnese by its ID
  async getOne(id) {
    try{
      const db=getDB()
      const collection=db.collection(this.collectionName)
      const res=await collection.findOne({_id:new ObjectId(id)});
      return res
    }
    catch(error){
      return new Error(error.message)
    }
  }

  // Get all expenses
  async getAllExpenses() {
    try{
      const db=getDB()
      const collection=db.collection(this.collectionName)
      return await collection.find().toArray()
    }
    catch(err){
      return new Error(error.message)
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    try{
      const db=getDB()
      const collection=db.collection(this.collectionName)
      return await collection.updateOne({_id:new ObjectId(id)},{$push:{tags:tag}})
    }
    catch(error){
       return new Error(error.message)
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
   
    try{
      const db=getDB()
       const {minAmount,maxAmount,isRecurring}=criteria
      const collection=db.collection(this.collectionName)
      let filterExpression={};
      if(minAmount){
          filterExpression.amount = {$gte: parseFloat(minAmount)}
      }
      if(maxAmount){
          filterExpression.amount = {...filterExpression.amount, $lte: parseFloat(maxAmount)}
      }
      if(isRecurring){
          filterExpression.isRecurring=JSON.parse(isRecurring)
      }
       return await collection.find(filterExpression).toArray();
    }
    catch(error){
       return new Error(error.message)
    }
  }
}

export default ExpenseRepository;
