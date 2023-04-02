let CustAccount = require("./model");

const createAccountControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const createacc = new CustAccount(req.body);
    createacc.save();
    res.json({message:`account ${req.body.accno} successfully created`, data: createacc})
}

const viewAccountControler = (req, res) => {
    const viewacc = CustAccount.all();
    res.json({message:`Account retrieved successfully`, data: viewacc})
}

const updateAccControler = (req, res) => {
    const {acname, accls, custid, currency, accno, acbal} = req.body;
    const updateacc = CustAccount.update(req.body);
    res.json({message: `account ${req.body.accno} updated successfully`})
}

const deleteAccControler = (req, res) => {
    const {acname} = req.body;
    const delAcc = CustAccount.delete(req.body);
    res.json({message:`account ${req.body.accno} successfully deleted`})
}

module.exports = {
    createAccountControler,
    viewAccountControler,
    updateAccControler,
    deleteAccControler
}

// the controllers depend on the model 