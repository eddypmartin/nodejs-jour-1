var http = require("http"); 
function onRequest(request, response) 
{ console.log("Requête reçue.");
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("Hello World"); 
 response.end(); 
} 
// le serveur écoute sur localhost:8888
http.createServer(onRequest).listen(8888);