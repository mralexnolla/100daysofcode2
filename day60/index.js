// thankU4Ex16
// Instead of sending hardcoded HTMl from the server, 
// lets explore how to server real html file 

// this method is manual but lets start with it 

const express = require('express');
const path = require('path');

const server  = express();


// middleware functions


// route functions
const homepage = (req, res) => {
    // 1 get the path 
    const homefile = path.join(__dirname, 'public', 'index.html')

    // 2 send the file
    res.sendFile(homefile) // this will render the path on the browser
}

const aboutpage = (req, res) => {
    const aboutpage = path.join(__dirname, 'public', 'about.html');
    res.sendFile(aboutpage);
}

// route def
server.get('/', homepage)
server.get('/about', aboutpage)

server.listen(3000, () => console.log("server is running"));

// initially this is what we did 
// lets use best practice but manual first

// still this is too manuall imagine doing this for 1000 pages \
// reason why its best to use the middle ware 

