// Please don't change the pre-written code
// Import the necessary modules here
import {authenticateUser,registerUser} from '../models/user.model.js'
export default class UserController {

  getRegister = (req, res, next) => {
    // Write your code here
    res.render('user-register')
  };
  getLogin = (req, res, next) => {
    // Write your code here
    res.render('user-login')
  };
  addUser = (req, res) => {
    const a=registerUser(req.body)
    if (a){
      res.render('user-login')
    }
    // Write your code here
  };
  loginUser = (req, res) => {
    // Write your code here
    if(authenticateUser(req.body)){
     res.json({ success: "true", message: "login successful" })
    }
    else{
      res.json({ success: "false", message: "login failed" })
    }
  };
}
