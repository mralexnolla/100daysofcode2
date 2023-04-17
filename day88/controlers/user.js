const express = require("express");
const UserModel = require("../models/user");
const {validationResult} = require("express-validator");
const bcrypty = require("bcryptjs");
const jwt = require("jsonwebtoken")


// ok so let work on this codes to make them better 
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

const signinControler =  async (req, res) => {

    try{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.json({message: errors.array()[0].msg})
    }

    const {email, password} = req.body;

    //find the user in the db
    const user = await UserModel.findOne({email});
    if(!user){
        return res.json({message:"User Not Fount"});
    }

    const isAuth = await bcrypty.compare(password, user.password);
    if(!isAuth){
        return res.json({message:"Email and password combinantion is incorret"})
    }

    // lets add authentication using a token in our case jsonwebtoken
    const token = jwt.sign({name: user.name, email: user.email, userId: user._id}, // this is the payload that will be used to authenticate and generate the token
             'superkey123', // this key will generate the token
             {expiresIn: "1h"})

    return res.json({message:"User successfully logged in", token})

    }catch(error){
        //console.log(err);
        res.json({message:"Error please try again "})
    }
   // thankU4Ex16
}



module.exports = {
    signupControler,
    signinControler
}