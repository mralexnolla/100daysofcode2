// #thankU4Ex16   why and how to include nodemon to your projec
// Why ? It restarts the server after every update automatically 
// I will be restarting manually untill i implement it 
// now lets add nodemon like this , thats all since i have already installed it 

const http = require('http');

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

const server =  http.createServer(requesthandler);

server.listen(3000, '127.0.0.1', () => console.log("Server started"))