const AccountModel = require('./model');

const createAccountControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const accnt = new AccountModel(req.body);
    accnt.save()  // this will return a promise
    .then(result => {
         res.json({message:"Account successfully created", data: result})
    })
    .catch(err => console.log(err))
}

// ok now lets query the db 
// so what if we want wanted to fetch by id 
const viewAccountControler = (req, res) =>{
    const {sid} = req.params
    if(sid){
        AccountModel.find({_id:sid})  // now what if i want to query all data when there is no id at the same tim
        .then(accounts => {
        res.json({message: "accounts successfully retrieved", data: accounts})
        })
        .catch(err => console.log(err))
    }else{
        AccountModel.find()  
    .then(accounts => {
        res.json({message: "accounts successfully retrieved", data: accounts})
    })
    .catch(err => console.log(err))
    }
    
}

// Lets update some data, we will have to find the data by id, lets start
const updateAccControler = (req, res) => {
    const {id, acname, accls, custid, currency, accno, acbal} = req.body;
    AccountModel.find({_id: id})
    .then(accounts => {
        if(accounts.length > 0){
            accounts[0].acname = acname;
            accounts[0].accls = accls;
            accounts[0].custid = custid;
            accounts[0].currency = currency;
            accounts[0].accno = accno;
            accounts[0].acbal = acbal;

            accounts[0].save();

            res.json({message:"Account updates successfully", data: accounts[0]})
        }

    })
    .catch(err => console.log(err))
}

// const deleteAccControler = (req, res) => {
//     const {acname} = req.body;
//     const delAcc = CustAccount.delete(req.body);
//     res.json({message:`account ${req.body.accno} successfully deleted`})
// }

module.exports = {
    createAccountControler,
    viewAccountControler,
    updateAccControler
    //deleteAccControler
}

// the controllers depend on the model 