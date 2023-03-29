//import the express server 
const express = require("express")

//instntiate the server
const server = express()

//create the middles wares . you can use body-parser too
server.use(express.json())

//Data base 

const database = [];


// model
class Model{
    constructor({name, location, branch, phone, address, accountNumber}){
        this.name = name;
        this.location = location;
        this.branch = branch;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
    }
    // we need to save these details to the database 
    save(){
        database.push(this);
        return this
        // i want to show you what "this represent" actuall the model
        console.log(this)
    }
}


//create the handler functions or controllers
const createBankControler = (req, res) => {
   // now we will create data for the db 
   const {name, location, branch, phone, address, accountNumber} = req.body;
   const bank = new Model(req.body)
   bank.save() // saving the data to the bank 

   res.json({message: "transaction successfull", data: bank})
   
}
const viewBankControler = (req, res) => {
    res.send("<h1>List  Bank</h1>")
}
const updateBankControler = (req, res) => {
    res.send("<h1>Update  Bank</h1>")
}
const deleteBankControler = (req, res) => {
    res.send("<h1>delete  Bank</h1>")
}


// create the routes
 //create bank
 server.post('/bank', createBankControler)
 // list bank 
 server.get('/bank', viewBankControler)
 // update bank
 server.put('/bank', updateBankControler)
 // delete bank
 server.delete('/bank', deleteBankControler)



 // start the server 
 server.listen(3000, () => console.log("server is running"))