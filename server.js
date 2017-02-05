var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io');


app.get("/", (req,res)=> {
  res.sendFile(__dirname + '/index.html');
});

http.listen(9000, ()=>{
  console.log("hello world");
})
