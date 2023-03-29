// Because of the lenth of the video, i will not start the server from scratch 
// Before to get the data from our form we needed to use a manual method 
// and search url like so 
// this is too long and complex to remeber 
// the easy way first 

// now the easiest way does not require bodyparser since express v 4.16
// and thats the way to go #thanU4Ex16

const express = require("express");
const path = require("path");

const server = express();

//middleware
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: true}))



// handler functions 
const logingpage = (req, res) => {
    console.log(req.body)
  res.send(`<h1>Welcome ${req.body.username}</h1>`)
    
}

//route definitions
server.post('/login', logingpage)

server.listen(3000, () => console.log("server is runing"))

// let install the body parser
// it comes automatically formates 