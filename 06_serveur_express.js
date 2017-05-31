var express = require('express');
var app = express();

// Cette route répond : "Hello World" sur la page d'accueil
// Le parametre req est l'objet request
// Le Paramètre res est l'objet result
app.get('/', function (req, res) {
   console.log("Reçu une requête GET pour la page d'accueil");
   res.send('Hello GET'); // sur la page d'accueil
})

// Cette route répond à une requête POST pour la page d'accueil
app.post('/', function (req, res) {
   console.log("Reçu une requête POST pour la page d'accueil");
   res.send('Hello POST');
})

// Cette route répond à une requête DELETE pour la page /del_user.
app.delete('/del_user', function (req, res) {
   console.log("Reçu une requête DELETE pour la page  /del_user");
   res.send('Hello DELETE');
})

// Cette route répond à une requête GET pour la page  /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Reçu une requête GET pour la page /list_user");
   res.send('Page Listing');
})

// Cette route répond à une requête GET pour abcd, abxcd, ab123cd, et tous les autres chemins acceptés par la regExp: ab*cd
app.get('/ab*cd', function(req, res) {   
   console.log("Reçu une requête  for /ab*cd");
   res.send('Page accepté par la regExp : ab*cd');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Exemple d'app écouté sur http://%s:%s", host, port)
})