const express = require("express");
const UserModel = require("../models/user");
const {validationResult} = require("express-validator");
const bcrypty = require("bcryptjs");
const userModel = require("../models/user");


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

// let continue with the sign in 

const signinControler = (req, res) => {
   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.json({message: errors.array()[0].msg})
    }

    const {email, password} = req.body;
    UserModel.findOne({email})
    .then(user => {
        if(user){
            bcrypty.compare(password, user.password)
            .then(result => {
                if(result){
                    res.json({message:"User successfully logged in"})
                }else{
                    res.json({message:"Email and password combinantion is incorret"})
                }
            })
        }
        return 
    })
    .catch(err => {
        console.log(err);
        res.json({message:"Error please try again "})
    })


}



module.exports = {
    signupControler,
    signinControler
}