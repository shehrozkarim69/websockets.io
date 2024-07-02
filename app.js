const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
var io = require('socket.io')(server);

const server = http.createServer(app);


app.get('/',(req, res)=>{

const option ={
    root: path.join(__dirname)
   
}
     const filename = 'index.html';
    res.sendFile(filename,option);
})



io.on("connection",(req,res) => {
    console.log("User connected");
})

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});