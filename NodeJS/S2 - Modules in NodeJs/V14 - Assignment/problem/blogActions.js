// Do not change the pre-written code.
// Make the necessary imports here.
import * as fs from 'fs';
export const writeBlog = (filePath, name) => {
  // Write your code here.
  fs.appendFileSync(filePath,name)
};

export const publishBlog = (filePath) => {
  // Write your code here.
  try{
    const buffer=fs.readFileSync(filePath,'utf8')
    return buffer
  }
  catch(error){
    console.log(error)
  }
};
