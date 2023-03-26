// #thankU4Ex16   why and how to include nodemon to your projec
//using express to start the server is a faster method given that express has http
// first let install install express dependencies
// now lets convert this server into express
// ok server satart 

// now lets start the epress server on a different file

//const http = require('http');
const express = require('express');

const requesthandler = (req, res) => {
    console.log("sending request")

    const url = req.url;
    res.setHeader("content-type", "text/html")

    if(url === '/'){
        res.write("<h1>Home</h1>")
    }else if(url === '/about'){
        res.write("<h2>About us</h2>")
    }else if(url === '/welcome'){
        res.write("<h1>Welcome to codetrain #thankU4Ex16</h1>")
    }

    res.end();

}

//const server =  http.createServer(requesthandler);
const server =  express();
server.use(requesthandler)

server.listen(3000, '127.0.0.1', () => console.log("Server started with express"))