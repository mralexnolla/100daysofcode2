

const {mongoose, Schema}  = require("mongoose");

const bankSchema = new mongoose.Schema({
    bankname: {
        type: String,
        required: true
    },
    adddress:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    },
    account:[
        {
            accountId:{
                //required: true,
                type: Schema.Types.ObjectId,
                ref: "Account"
            }
        }
    ]
})

const bankModel = mongoose.model("Bank", bankSchema);

module.exports = bankModel