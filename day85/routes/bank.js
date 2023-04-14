const express = require("express");
const route = express.Router();
const {createBankController, retrieveBankController, updateBankControler, deleteBankControler} = require("../controlers/bank")

route.post('/bank', createBankController);
route.get('/bank/:id?', retrieveBankController);
route.put('/bank', updateBankControler);
route.delete('/bank', deleteBankControler);

module.exports = route;