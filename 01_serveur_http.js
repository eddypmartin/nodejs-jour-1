
/*
var http = require("http"); 
http.createServer(function(request, response) 
{   
	console.log('branchement sur le port 8888')
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");   
	response.end(); 
}).listen(8888);

///////////////////////////////////////////////////////   Une autre syntaxe pour faire la même chose

var http = require("http"); 
function onRequest(request, response) 
{  	console.log("Requête reçue.");
   	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");   
	response.end(); 
} 
// le serveur écoute sur localhost:8888
http.createServer(onRequest).listen(8888);  


*/

////////////////////////////////////////////////////////// Encore une autre syntaxe 


var http = require("http");
var server = http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<!DOCTYPE "html">');
  response.write('<html>');
  response.write('<head>');
  response.write('<title>Vive Node.js</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('Bonjour tout le monde');
  response.write('</body>');
  response.write('</html>');
  response.end(); 

})
// le port 80 est le port standard on peut alors lancé la page avec seulement : localhost
server.listen(80)  



