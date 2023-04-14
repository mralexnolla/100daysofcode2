const express = require("express");
const mongoose = require("mongoose");

const BankRouters = require("./routes/bank");
const AccountRouters = require("./routes/account");



const server = express();

server.use(express.json());


// routes these routes are included in the middleware 
server.use(BankRouters);
server.use(AccountRouters);



//start server
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb+srv://bankuser:v5dpoJiWZMrGJ0EC@cluster0.vtzjdi0.mongodb.net/bankdata?retryWrites=true&w=majority")
    server.listen(3000, ()=> console.log("Server is running"))
}

// So our work is much cleaner 


