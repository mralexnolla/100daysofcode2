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
const viewAccountControler = (req, res) =>{
    AccountModel.find()
    .then(accounts => {
        res.json({message: "accounts successfully retrieved", data: accounts})
    })
    .catch(err => console.log(err))
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