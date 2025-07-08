// Please don't change the pre-written code
// Import the necessary modules here

import { getDB } from "../../config/mongodb.js";

class BucketListRepository {
  constructor() {
    this.collection = "bucketListItems";
  }
  async addBucketListItem(bucketListItem) {
    // Write your code here
    try{
      const db=getDB()
      const collection=db.collection('bucketItems')
      await collection.insertOne(bucketListItem)
      return bucketListItem
    }
    catch(err){
      return new Error(err.message)
    }
  }

  async findOneBucketListItem(title) {
    // Write your code here
    try{
      const db=getDB()
      const collection=db.collection('bucketItems')
      return await collection.findOne({title})

    }
    catch(err){
      return new Error(err.message)
    }
  }
}

export default BucketListRepository;
