// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req,res,next) => {
  // Write your code here
   const authHeader=req.headers['authorization']
   if(!authHeader){
    return res.status(401).json({"success":"false","message":"no authorization details found"})
   }
   const base64Credentials=authHeader.replace('Basic','')
   const decodedCredentials=Buffer.from(base64Credentials,'base64').toString('utf8')
   const creds=decodedCredentials.split(':')
   const users=getAllUsers()
   const user=users.find((user)=>user.email==creds[0] && user.password==creds[1])
   if(!user){
    return res.status(401).json({"success":"false","message":"authorization failed"})
   }
   else{
    next()
   }
};

export default basicAuthMiddleware;
