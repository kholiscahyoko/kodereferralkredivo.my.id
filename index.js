var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Index html listening at http://%s:%s", host, port);
});