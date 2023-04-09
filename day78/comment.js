// let install mongoos and use it to connect to mongodb

// in mongodb we will create a database 

// let start the server to check for error

// let check that the connect is successfull

// #thankU4Ex16

// Now that we have connected to mongodb 
// lets create a schema 


//let exedb = require("./database");
const mongoose = require("mongoose")

const AccountSchema = new mongoose.Schema({
    acname: String, 
    accls: String,
    custid: Number,
    currency: String,
    accno: String,
    acbal: String
})

// now lets create the moden 
const AccountModel = mongoose.model('Account', AccountSchema)

module.exports = AccountModel;
/******************************* */

// {         
//     "acname": "Faisal Salif",
//     "accls": "SAVINGS",
//     "custid": "878765654",
//     "currency": "GHS",
//     "accno": 123656256543,
//     "acbal": "30000"
// }

/**************************************************** */
const AccountModel = require("./model");

const createAccountControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const createacc = new AccountModel(req.body);
    createacc.save()
    res.json({message:`account ${req.body.accno} successfully created`, data: result})
}


const viewAccountControler = (req, res) => {
    AccountModel.find()
    .then(accounts => {
        res.json({message:`Account retrieved successfully`, data: accounts})
    })
    .catch(err => console.log(err))
    
}

const updateAccControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const updateacc = CustAccount.update(req.body);
    res.json({message: `account ${req.body.accno} updated successfully`})
}


// const updateAccControler = (req, res) => {
//     const {id, acname, accls, custid, currency, accno, acbal} = req.body;
//     AccountModel.find({_id: id})
//     .then(accounts => {
//         if(accounts.length > 0){
//             accounts[0].acname = acname;
//             accounts[0].accls = accls;
//             accounts[0].custid = custid;
//             accounts[0].currency = currency;
//             accounts[0].accno = accno;
//             accounts[0].acbal = acbal;
            
//             accounts[0].save();

//             res.json({message: `account ${req.body.accno} updated successfully`, data: accounts[0]})
//         }
        
//     })
//     .catch(err => console.log(err))
    
    
// }

// const deleteAccControler = (req, res) => {
//     const {acname} = req.body;
//     const delAcc = CustAccount.delete(req.body);
//     res.json({message:`account ${req.body.accno} successfully deleted`})
// }

{
    "id": "642db0c658a25897eddc3031",
    "acname": "Faisal Salif Usman",
    "accls": "CURRENT",
    "custid": "878765654",
    "currency": "GHS",
    "accno": 123656256543,
    "acbal": "30000"
}