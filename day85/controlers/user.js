const express = require("express");
const UserModel = require("../models/user");
const {validationResult} = require("express-validator");
const bcrypty = require("bcryptjs")


const signupControler = (req, res) => {

    const errorValidation = validationResult(req)
    if(!errorValidation.isEmpty()){
        console.log(errorValidation)
        return res.json({message:"Name validation error", data: errorValidation.array()[0].msg})
    }

    const {name, email, password, account} = req.body;
    
    bcrypty.hash(password, 10)
    .then(hashpwd => {
        const user = new UserModel({name, email, password:hashpwd});
        user.save()
        .then(user => {
            if(user){
                res.json({message:"SIgn up successfull", data: user})
            }else{
                res.json({message:"Failed to create user"})
            }
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
    
}

module.exports = {
    signupControler
}