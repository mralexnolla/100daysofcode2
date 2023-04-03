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

module.export = AccountModel;


