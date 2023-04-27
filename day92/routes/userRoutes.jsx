const express = require('express');
const { loginController, registerControlle } = require('../controllers/userCtrl.jsx');

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post('/login', loginController)

//REGISTER || POST
router.post('/register', registerControlle)

module.exports = router