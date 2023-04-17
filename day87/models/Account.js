// so lets take the process all over
// creat a model, controler, and post the data to mongodb 

const {mongoose, Schema} = require("mongoose");

const AccountSchema = new mongoose.Schema({
    acname: {
        type: String,
        required: true
    }, 
    accls: {
        type: String,
        required: true
    }, 
    custid: {
        type: String,
        required: true
    }, 
    currency: {
        type: String,
        required: true
    }, 
    accno: {
        type: Number,
        required: true
    }, 
    acbal: {
        type: String,
        required: true
    },
    bankid:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Bank"
    }
})

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;
