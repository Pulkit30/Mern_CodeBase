// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  users.push({
    'id':users.length+1,
    'name':user.name,
    'email':user.email,
    'password':user.password
  })
  return true
};

export const authenticateUser = (reqUser) => {
  // Write your code here
  const userFound=users.find((user)=>{
    return user.email==reqUser.email && user.password==reqUser.password
  })
  return userFound
};
