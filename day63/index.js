//#thankU4Ex16
//Ok let see how we can get the data that we posted from the from 
// a small hack not to be used at home 
// lol

const express = require("express");
const path = require("path");

const server = express();

//middleware
server.use(express.static(path.join(__dirname, 'public')));

// handler functions
const pagecodetrain = (req, res) => {
    let body = "";
    req.on('data', chunk => {
        body += chunk
    });
    req.on('end', () => {
        console.log(body)
    })

    res.send("<h1>Welcome to codetrain</h1>")
}

//route definitions
server.post('/codetrain', pagecodetrain)

server.listen(3000, () => console.log("server is running"))
