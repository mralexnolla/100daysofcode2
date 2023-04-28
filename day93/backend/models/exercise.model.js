const {mongoose, Schema} = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    username: {type: String, required: true},
    description: {type: String, required:true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true
})

const exerciseModel = mongoose.model("Exercise", exerciseSchema);

module.exports = exerciseModel;