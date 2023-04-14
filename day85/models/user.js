const {mongoose, Schema} = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    account:[
        {
            id:{
                type:Schema.Types.ObjectId,
                ref: "Account"
            }
        }
    ]
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel