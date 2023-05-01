 const {mongoose, Schema} = require("mongoose");

 const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
 },{
    timestamps: true
 })

 const UserModel = mongoose.model('User', userSchema);

 module.exports = UserModel;