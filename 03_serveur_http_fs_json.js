var http = require("http"); //importe le module serveur http
var fs = require('fs');
var sVue;

function maVue(monObjet){
	sVue= "<table>";
	for (propriete in monObjet){
		sVue+= "<tr>";
		sVue+= "<th>" + propriete + "</th><td>" + monObjet[propriete] + "</td>";
		sVue+= "</tr>";
	};
	sVue+= "</table>";

};

fs.readFile('public/data/data.json', 'utf8', function (err, data) {
  if (err) throw err;
  maVue(JSON.parse(data));
});

http.createServer(function(request, response) {
  console.log(request.url)
   if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    console.log('favicon requested');
    return;
  }
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<style>table,tr,th,td{border-collapse:collapse;border: black solid 1px;}</style>");
  response.write(sVue);
  response.end();
}).listen(8080);

// lecture d'un fichier


