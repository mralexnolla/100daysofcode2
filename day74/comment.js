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