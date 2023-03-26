// #thankU4Ex16
// let start a server to test our routes using postman

const express = require("express");

const server = express();

server.listen(3000, () => console.log("server started"));

// now lets create a route using a get and post method 

// lets use a handler function on the same route with a diffrent method

const puthandler = (req, res) => {
    res.send("This is from the handler")
}

server.get('/login', (req, res) => res.send("<h1>Welcome to the loging page</h1>"));
server.post('/about', (req, res) => res.send("This is the about page"));
server.put('/about', puthandler);

// let configure the script on the json file as well 
// ok now lets start the server and test it with post man 
// we cannot render the about page because its expect a post or put method
// so we will use post man

// what you realise is that you can use two different outputs on the same route 
// using different mothods 