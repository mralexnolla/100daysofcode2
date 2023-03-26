const express = require('express');

const server = express();
server.listen(3000, '127.0.0.1', () => console.log("Server started"))

server.get('/', (req, res) => res.send("<h1>Home express</h1>"))
server.get('/about', (req, res) => res.send("<h2>About us</h2>"))

// i prefere this #thanU4Ex16