// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next) => {
  // Write your code here
  const {jwtToken}=req.cookies;
   const token = req.headers['authorization'];
   if(!jwtToken){
       return res.status(401).json({"success":"false","msg":{"name":"JsonWebTokenError","message":"jwt must be provided"}});
   }
   try{
    const payload=jwt.verify(jwtToken,"CodingNinjas2016")
    next();
   }
   catch(error){
    return res.status(401).json({"success":"false","msg":"Unauthorized"});
   }
  
};

export default jwtAuth;
