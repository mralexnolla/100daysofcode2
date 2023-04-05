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



// const updateAccControler = (req, res) => {
//     const {acname, accls, custid, currency, accno, acbal} = req.body;
//     const updateacc = CustAccount.update(req.body);
//     res.json({message: `account ${req.body.accno} updated successfully`})
// }

// const deleteAccControler = (req, res) => {
//     const {acname} = req.body;
//     const delAcc = CustAccount.delete(req.body);
//     res.json({message:`account ${req.body.accno} successfully deleted`})
// }

module.exports = {
    createAccountControler,
    viewAccountControler
    //updateAccControler,
    //deleteAccControler
}

// the controllers depend on the model 