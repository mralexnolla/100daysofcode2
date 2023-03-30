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

    static update(item={}){
        bankDB = bankDB.map(bank => {
            if(bank.name === item.name){
                return {...bank, ...item}
            }
            return bank
        })
    }

    static delete({name}){
        let bankdbdata = ""; // just want to return the data added 
        bankDB = bankDB.filter(bank => {
            if(bank.name !== name){
                return true
            }
            bankdbdata = name
            return false
        })
        return bankdbdata
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
    const {name, location, branch, phone, address, accountNumber} = req.body;
    const updatedData = BankModel.update(req.body);
    res.json({message:"Update successfull", data:updatedData})
} 

const deleteBanksControler = (req, res) => {
    // banks 
    const {name} = req.body;
    const delData = BankModel.delete(req.body);
    res.json({message: `${req.body.name} is deleted successfuly`, data: delData})
}


//routes
server.post('/bank', creatBankControler);
server.get('/bank', listBanksControler);
server.put('/bank', updateBankControler);
server.delete('/bank', deleteBanksControler)

//start server 
server.listen(3000, () => console.log("Server runing"))