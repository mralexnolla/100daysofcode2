const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const {signupControler, signinControler} = require("../controlers/user");
const userModel = require("../models/user");

router.put('/signup',[
            body('name')
                .custom((value, {req}) => {
                            return userModel.findOne({"name": value})
                            .then(name => {
                                if(name){
                                    return Promise.reject("This name already exist")
                                }
                            })
                    })
                .withMessage("Duplicate name")
                .trim()
                .not()
                .isEmpty()
                .withMessage("username cannot be empty"),
            body('email')
                .isEmail()
                .withMessage("Invalid email! Please check your email")
                .custom((value, {req}) => {
                    return userModel.findOne({"email": value})
                    .then(mail => {
                        if(mail){
                            return Promise.reject("This email already exist")
                        }
                    })
                })
                .trim()
                .not()
                .isEmpty()
                .withMessage("Email cannot be empty"),
            body('password')
                .trim()
                .isLength({min: 6})
                .withMessage("Password must be a minimum of 6 characters")
                .not()
                .isEmpty()
                .withMessage("password cannot be empty")
        ],signupControler);

router.post('/signin',[
    body('email').trim().not().isEmpty().withMessage("Email cannot be empty #thankU4Ex16"),
    body('password').trim().isLength({min:5})
],signinControler)



module.exports = router;
