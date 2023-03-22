
// so lets send an http request and try to get a response 

// first lets create the server 

const http = require('http');

// now lets send the request through a function

// now let send a response back to the browser

// ok it too small so lets make it big 

const handleRequest = (requestobject, responseobject) => {
    console.log("sending the requeste to the server ")
    responseobject.write("<h1>Welcome #thankU4Ex16</h1> \n");
    responseobject.write("<img src=\"https://images.unsplash.com/photo-1679419930969-2eadceb258d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80\" alt=\"imageMan\">")
    responseobject.end();

}

const server = http.createServer(handleRequest);

server.listen(3000, '127.0.0.1', () => console.log("Server is ready!")) // here i will add a callback function that will tell me when the server is ready

// now lets start the server 

// lol

// finally ohhhhh