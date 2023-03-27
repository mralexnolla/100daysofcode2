// thankU4Ex16
// previously we havd to serve our files manually 
// this does not even render css aside the fact its not sustainable
// so lets automate this using the middleware

const express = require("express");
const path = require("path")

const server = express();

server.use(express.static(path.join(__dirname, 'public')))

server.listen(3000, () => console.log("Server is runing"))

// thats all 
// by default the root directory will use index.html
// now even css is rendered 



