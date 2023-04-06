// so lets take the process all over
// creat a model, controler, and post the data to mongodb 

const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    acname: String, 
    accls: String, 
    custid: String, 
    currency: String, 
    accno: Number, 
    acbal: String
})

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;
