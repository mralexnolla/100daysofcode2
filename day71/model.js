let exedb = require("./database");

class CustAccount{
    constructor({acname, accls, custid, currency, accno, acbal}){
        this.acname = acname;
        this.accls = accls;
        this.custid = custid;
        this.currency = currency;
        this.accno = accno;
        this.acbal = acbal
    }

    save(){
        exedb.push(this);
        return this
    }

    static all(){
        return exedb
    }

    static update(accnt={}){
        exedb = exedb.map(acc => {
            if(acc.acname === accnt.acname){
                return {...acc, ...accnt}
            }
            return acc
        })
       
    }

    static delete({acname}){
        exedb = exedb.filter(acc => {
            if(acc.acname !== acname){
                return true
            }
            return false
        })
    }
}

module.exports = CustAccount;

// but the model requires the database so we need to import the db here instead