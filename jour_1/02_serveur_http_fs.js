////////////////////////////////////////////////////////  content-type UTF-8 
var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){
	fs.readFile('data.txt', function(erreur,data){
	if (erreur) console.log(erreur)
		else {
			response.writeHead(200,  {"Content-Type" : "text/html; charset=UTF-8"})
			response.write('<style>h1 {font-family:arial; font-size: 3em;} p {font-size: 1em;}</style>')
			console.log(data.toString())
			response.write(data.toString())
			response.end()
		}
})
}).listen(8080)

// lecture d'un fichier


