var http = require("http");
var server = http.createServer(function(request, response) {

response.writeHead(200, {"Content-Type": "text/html ; charset=utf-8"});
 response.write('<!DOCTYPE "html">');
 response.write('<html>');
 response.write('<head>');
 response.write('<title>Vive Node.js</title>');
 response.write('</head>');
 response.write('<body>');
 response.write('<h1>Bonjour tout le monde</h1> ');
  response.write('Québec');
 response.write('</body>');
 response.write('</html>');
 response.end();

})
// le port 80 est le port standard on peut alors lancer la page avec seulement : localhost
server.listen(80)