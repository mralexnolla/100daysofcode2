const express = require("express");
const route = express.Router();  // am using exress.Router package 
const {createAccountControler, viewAccountControler, updateAccControler, deleteAccControler} = require("../controlers/account")

route.post('/account', createAccountControler);
route.get('/account/:sid?', viewAccountControler);
route.put('/account', updateAccControler);
route.delete('/account', deleteAccControler);

module.exports = route;