var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Bonjour tout le monde');
})

    var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
   
   console.log("L'application écoute sur ://%s:%s", host, port)
})