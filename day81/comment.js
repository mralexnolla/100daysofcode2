// let install mongoos and use it to connect to mongodb

// in mongodb we will create a database 

// let start the server to check for error

// let check that the connect is successfull

// #thankU4Ex16

// Now that we have connected to mongodb 
// lets create a schema 


//let exedb = require("./database");
const mongoose = require("mongoose")

const AccountSchema = new mongoose.Schema({
    acname: String, 
    accls: String,
    custid: Number,
    currency: String,
    accno: String,
    acbal: String
})

// now lets create the moden 
const AccountModel = mongoose.model('Account', AccountSchema)

module.exports = AccountModel;
/******************************* */

// {         
//     "acname": "Faisal Salif",
//     "accls": "SAVINGS",
//     "custid": "878765654",
//     "currency": "GHS",
//     "accno": 123656256543,
//     "acbal": "30000"
// }

/**************************************************** */
const AccountModel = require("./model");

const createAccountControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const createacc = new AccountModel(req.body);
    createacc.save()
    res.json({message:`account ${req.body.accno} successfully created`, data: result})
}


const viewAccountControler = (req, res) => {
    AccountModel.find()
    .then(accounts => {
        res.json({message:`Account retrieved successfully`, data: accounts})
    })
    .catch(err => console.log(err))
    
}

const updateAccControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const updateacc = CustAccount.update(req.body);
    res.json({message: `account ${req.body.accno} updated successfully`})
}


// const updateAccControler = (req, res) => {
//     const {id, acname, accls, custid, currency, accno, acbal} = req.body;
//     AccountModel.find({_id: id})
//     .then(accounts => {
//         if(accounts.length > 0){
//             accounts[0].acname = acname;
//             accounts[0].accls = accls;
//             accounts[0].custid = custid;
//             accounts[0].currency = currency;
//             accounts[0].accno = accno;
//             accounts[0].acbal = acbal;
            
//             accounts[0].save();

//             res.json({message: `account ${req.body.accno} updated successfully`, data: accounts[0]})
//         }
        
//     })
//     .catch(err => console.log(err))
    
    
// }

// const deleteAccControler = (req, res) => {
//     const {acname} = req.body;
//     const delAcc = CustAccount.delete(req.body);
//     res.json({message:`account ${req.body.accno} successfully deleted`})
// }

/**
 * Ok i have deleted all my account so that i can create a bank and 
 * create accounts with the bank  
 * 
 * now lets create account in the banks 
 * 
 * we cannot retrieve the banks yet because we have not yet writen the method to do that 
 * #thankU4Ex16
 * 
 */

{
    "id": "642b34b722bc15e9c4c6e5d6",
    "acname": "Eoe Alexandra",
    "accls": "CYRRENT",
    "custid": "96123158",
    "currency": "USD",
    "accno": 123656256543,
    "acbal": "1500",
    
},
{
    "id": "642b36eaa87b5f8de51edb12",
    "acname": "Alexandra Ese",
    "accls": "CYRRENT",
    "custid": "10123158",
    "currency": "USD",
    "accno": 123656256543,
    "acbal": "2500"
    
},
{
    "id": "642c2eb3ac0693199d48e193",
    "acname": "NB Alex ",
    "accls": "CURRENT",
    "custid": "187876543",
    "currency": "USD",
    "accno": 123656256543,
    "acbal": "35000"
    
},
{
    "id": "642c319f95eec50a6cb6bdcf",
    "acname": "CodeTrain Bank",
    "accls": "BANK",
    "custid": "187876543",
    "currency": "USD",
    "accno": 45638,
    "acbal": "28000"
    
},
{
    "id": "643285c8e235105a5958c10e",
    "acname": "Faisal Salif Usman",
    "accls": "CURRENTS",
    "custid": "878765654",
    "currency": "GHS",
    "accno": 123656256543,
    "acbal": "30000"
    
}


{
    "_id": "6433f1eedead6ede933c1302",
    "acname": "Alexandra Ese",
    "accls": "CYRRENT",
    "custid": "10123158",
    "currency": "USD",
    "accno": 123656256543,
    "acbal": "50000",
    "bankid": {
        "_id": "6433f0fce5ee44c40200984f",
        "bankname": "Ecobank",
        "adddress": "Ridge round about",
        "location": "Accra",
        "telephone": 109882384923754540,
        "account": [],
        "__v": 0
    },
    "__v": 0
}

// as we can see the data comes with the whole bankid object 
// so what if i want to display only the bankname and telephone
// ok the id keeps comming lets remove that 
// and thats how we do it #thankU4Ex16