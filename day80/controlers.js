const AccountModel = require('./model');
const BankModel = require('./BankModel');


const createAccountControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal, bankid} = req.body;
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
        .populate("bankid", "bankname telephone -_id")
        .then(accounts => {
        res.json({message: "accounts successfully retrieved", data: accounts})
        })
        .catch(err => console.log(err))
    }else{
        AccountModel.find() 
        .populate("bankid", "bankname telephone -_id") 
        .then(accounts => {
            res.json({message: "accounts successfully retrieved", data: accounts})
        })
        .catch(err => console.log(err))
    }
    
    
}

// Lets update some data, we will have to find the data by id, lets start
const updateAccControler = (req, res) => {
    const {id, acname, accls, custid, currency, accno, acbal} = req.body;
    AccountModel.findById(id)
    .then(account => {
        if(account){
            account.acname = acname;
            account.accls = accls;
            account.custid = custid;
            account.currency = currency;
            account.accno = accno;
            account.acbal = acbal;

            account.save();

            res.json({message:"Account updates successfully", data: account})
        }else{
            res.json({message:"No data found"})
        }

    })
    .catch(err => console.log(err))
}

//now lets work on the delete controler but before that lets modify the upate controller 
// great

const deleteAccControler = (req, res) => {
    const {id} = req.body;
    AccountModel.findByIdAndDelete(id)
    .then(account => {
        if(id){
            res.json({message:"Account deleted successfully", data: account});
            return
        }else{
            res.json({message:"no data found"});
        }
    })
}

// bank controllers 
const createBankController = (req, res) => {
    const {bankname, adddress, location, telephone } = req.body;
    const createBank = BankModel(req.body)
    createBank.save()
    .then(result => {
        if(result){
            res.json({message: " Bank created successfully", data: result});
        }else{
            res.json({message: "Failed to create Bank"})
        }
    })
}

const retrieveBankController = (req,res) => {
    const {id} = req.params
    if(id){
        BankModel.findById(id)
        .then(result => {
            if(result){
                res.json({message:"Bank successfully retrieved", data: result})
            }else{
                res.json({message:"Bank successfully retrieved", data: result})
            }
        })
        .catch(err => console.log(err))
    }else{
        BankModel.find(id)
        .then(result => {
            if(result){
                res.json({message:"Bank successfully retrieved", data: result})
            }else{
                res.json({message:"Bank successfully retrieved", data: result})
            }
        })
        .catch(err => console.log(err))
    }
    
}

// ok time to write the update and delete bank controler 
const updateBankControler = (req, res) => {
    const {id, bankname, adddress, location, telephone } = req.body;
    BankModel.findById(id)
    .then(bank => {
        if(bank){
            bank.bankname = bankname;
            bank.adddress = adddress;
            bank.location = location;
            bank.telephone = telephone;

            bank.save()

            res.json({message:"Bank updates sucessfully", data: bank})
        }else{
            res.json({message:"failed to update bank",})
        }
    })
}

const deleteBankControler = (req, res) => {
    const {id} = req.body;
    BankModel.findByIdAndDelete(id)
    .then(result => {
        if(result){
            res.json({message:"Bank successfully deleted"})
        }else{
            res.json({message:"No data found"})
        }
    })
}






module.exports = {
    createAccountControler,
    viewAccountControler,
    updateAccControler,
    deleteAccControler,
    createBankController,
    retrieveBankController,
    updateBankControler,
    deleteBankControler
}

// the controllers depend on the model 