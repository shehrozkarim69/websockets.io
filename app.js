const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };
    const filename = 'index.html';
    res.sendFile(filename, options);
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});
