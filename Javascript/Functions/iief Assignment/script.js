function main() {

  let userAuth = (
    function () {
        const registeredUsers={}
        
      // Create an empty array to store user data.
       return {
           registerUser(userName,password){
              if (!this.checkCredentials(userName)){
                  registeredUsers[userName]=password;
                  return "The user have been added to the registeredUser array.";
              }
              else {
                return 'The user is already registered.';
             }
          },
         checkCredentials(userName){
          return registeredUsers.hasOwnProperty(userName)
         }
       }
      // Define the registerUser function.
  

      // Define the checkCredentials function.
      

    // Return the registerUser function as part of the userAuth object
    }
  )();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123")); 
  // Output: "The user have been added to the registeredUser array"
  console.log(userAuth.registerUser("user1", "password123")); 
  // Output: "The user is already registered"

  return userAuth;
}
