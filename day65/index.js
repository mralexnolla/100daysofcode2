//import the express server 
const express = require("express")

//instntiate the server
const server = express()

//create the middles wares . you can use body-parser too
server.use(express.json())

//Data base 

const database = []

// model
// the model will comunicate witj the database 


//create the handler functions or controllers
const createBankControler = (req, res) => {
    res.send("<h1>Create Bank</h1>")
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