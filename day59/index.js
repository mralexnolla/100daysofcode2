// #thankU4Ex16
// A middle ware is a function through which transactions are parsed
// there are two types , General and routh specific middleware
// we will see both 

// lets start by lunching the server 

const express = require("express");

const server = express();
server.listen(3000, () => console.log("server started"))

// now the middleware , lets start with the general
const generalmiddleware = (req, res, next) => {
    console.log("This is from the GNERAL MIDDLEWARE");
    next();
}

server.use(generalmiddleware)

// now the specific middleware

const specificmiddleware = (req, res, next) => {
    console.log("This is from the SPECIFIC MIDDLEWARE");
    next();
}

// now the routes 

server.get('/login', (req, res) => res.send("The loging page"));
server.post('/about', specificmiddleware, (req, res) => res.send("About Us page"));

// the general should run for both routes 
// the specific middleware should run only for the POST method


