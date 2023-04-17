const AccountModel = require('../models/Account');
const BankModel = require('../models/Bank');

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
    .then(delbank => {
        if(delbank){
            AccountModel.deleteMany({bankid: delbank._id})
            .then(result => {
                res.json({message:"Accounts deleted with the bank", data: result})
            })
            .catch(err => console.log(err))
        }else{
            res.json({message:"No data found"})
        }
    })
    .catch(err => console.log(err))
}

module.exports = {
    createBankController,
    retrieveBankController,
    updateBankControler,
    deleteBankControler
}

