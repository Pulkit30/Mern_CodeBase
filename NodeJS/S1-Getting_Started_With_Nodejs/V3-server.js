//create a server using NodeJs

//1 import http library/module

const http = require("http");

//2 Create Server
const server = http.createServer((req, res) => {
  //Here comes the request
  res.end("Welcome to NodeJS Ninja Serverserver.js");
});

//Server is expecting a callback function which has two parameters req and res
//This callback function gets executed every time a request is made to the server.

//3. Specify a port to listen the client's request
server.listen(3100, () => {
  console.log("Server is listening on port 3100");
}); //This server is available for listening to requests on port number 3100

//console.log('Server is listening on port 3100')
//Callback function inside listen function will be executed when server has started to listen
