const express = require('express');

// Create a server.

const server = express();

// Handle default request.

function firstMiddleware(req,res,next){
  console.log(`this is first Middleware`)
  next()
}

function secondMiddleware(req,res,next){
  console.log(`this is second Middleware`)
  next()
}

function globalMidddleware(req,res,next){
  console.log(`this is global Middleware`)
  next()
}

//This is going to execute for all requests
server.use(globalMidddleware)

//route-level middlewares going to be executed for send requests
server.get('/send',[firstMiddleware,secondMiddleware], (req, res) => {
  res.send('Hello World! This is Express server');
});

// Assign port.
server.listen(3200, () => {
  console.log('Server is listening on 3200');
});