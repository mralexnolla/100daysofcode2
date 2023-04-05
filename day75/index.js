const express = require("express");
const { createAccountControler, viewAccountControler,updateAccControler,deleteAccControler} = require("./controlers")
// this is destructuring . So our codes have been reduced to this
const mongoose = require("mongoose");
const AccountModel = require("./model")

const server = express();

server.use(express.json());

// model

// routes 
server.post('/account', createAccountControler);
server.get('/account/:sid?', viewAccountControler);
//server.put('/account', updateAccControler);
//server.delete('/account', deleteAccControler)

//start server
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb+srv://bankuser:v5dpoJiWZMrGJ0EC@cluster0.vtzjdi0.mongodb.net/bankdata?retryWrites=true&w=majority")
    server.listen(3000, ()=> console.log("Server is running"))
}

// we still have our connection to the banks schema in mogodb


