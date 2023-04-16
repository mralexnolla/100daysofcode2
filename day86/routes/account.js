const express = require("express");
const route = express.Router();  // am using exress.Router package
const {body} = require("express-validator") 
const {createAccountControler, viewAccountControler, updateAccControler, deleteAccControler} = require("../controlers/account");
const AccountModel = require("../models/Account");


route.post('/account',
[body('acname').custom((value, {req}) => {
                            return AccountModel.findOne({"acname": value})
                            .then(accnam => {
                                if(accnam){
                                    return Promise.reject("This name already exist")
                                }
                            })
                      }).withMessage("Name duplicate not aloud").trim().not().isEmpty().withMessage("Name cannot be empty"),
body('custid').custom((value, {req}) => {
    return AccountModel.findOne({"custid": value})
    .then(custid => {
        if(custid){
            return Promise.reject("Customer ID is should be unique")
        }
    })
}).trim().not().isEmpty().withMessage("Id cannot be empty")
] ,createAccountControler);
route.get('/account/:sid?', viewAccountControler);
route.put('/account', updateAccControler);
route.delete('/account', deleteAccControler);

module.exports = route;