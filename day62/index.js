// ok lets try to use a form to redirect to any of our toutes 
// now lets create a form 

const express = require('express');
const path = require("path");

const server = express();

//middle ware
server.use(express.static(path.join(__dirname, 'public')));

const logingpage = (req, res) => {
    res.send("<h1>Done #thankU4Ex16 Nice </h1>")
}

//seting a rout

server.post('/login', logingpage)

server.listen(3000, ()=>console.log("Server is running"))



