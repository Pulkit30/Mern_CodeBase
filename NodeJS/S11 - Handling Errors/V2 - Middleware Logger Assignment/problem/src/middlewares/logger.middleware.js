// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
import fs from 'fs'
const fsPromise=fs.promises;

async function log(logData){
   try{
    logData = `\n ${new Date().toString()} \n ${logData}`;
    await fsPromise.appendFile('log.txt',logData)
   }
   catch(error){
    console.log(error);
   }
}
export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
 if(req.url.includes('/api/user')){
   const logData=`req URL: ${req.url} \n reqBody: ${JSON.stringify(req.body)}`
   await log(logData)
 }
 next()
};
export default loggerMiddleware;
