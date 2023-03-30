const express = require("express");

const server = express();

server.use(express.json());

//database
let bankDB = [] 

//model
class BankModel{
    constructor({name, location, branch, phone, address, accountNumber}){
        this.name = name;
        this.location = location;
        this.branch = branch;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
    }
    save(){
        bankDB.push(this);
        return this;   
    }

    static all(){
        return bankDB
    }

    //now we build the update function
    static update(item = {}){
        // mapping through the bankDB to iterate through the data 
        bankDB = bankDB.map(bank => {
            if(bank.name === item.name){
                return {...bank, ...item}
            }
            return bank
        })
    }
        
        
    

    
    
}

//controler
const creatBankControler = (req, res) => {
    // create data in database
    const {name, location, branch, phone, address, accountNumber} = req.body;
    const bank = new BankModel(req.body);
    bank.save();

    res.json({message: "Create Transaction Successfull", data: bank})
}

const listBanksControler = (req, res) => {
    //list banks 
    const bank = BankModel.all()

    res.json({message:"data retriev successfull", data: bank})

}

const updateBankControler = (req, res) => {
    //update banks
    // first we get the request from the body as usual
    const {name, location, branch, phone, address, accountNumber} = req.body;
    
    //next we add the request to the model with a function that we will define
    const updatedData = BankModel.update(req.body)

    // finaly we send the response 
    res.json({message:"data successfully updates", data: updatedData})
} 

const deleteBanksControler = () => {
    // banks 
}


//routes
server.post('/bank', creatBankControler);
server.get('/bank', listBanksControler);
server.put('/bank', updateBankControler);
server.delete('/bank', deleteBanksControler)

//start server 
server.listen(3000, () => console.log("Server runing"))