const express = require("express");
const { createAccountControler, viewAccountControler,updateAccControler,deleteAccControler} = require("./controlers")
// this is destructuring . So our codes have been reduced to this 

const server = express();

server.use(express.json());

// model

// routes 
server.post('/account', createAccountControler);
server.get('/account', viewAccountControler);
server.put('/account', updateAccControler);
server.delete('/account', deleteAccControler)

//start server
server.listen(3000, ()=> console.log("Server is running"))