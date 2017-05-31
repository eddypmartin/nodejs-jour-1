var http = require("http");
var fs = require('fs')

function maVue(monObjet)
{
	console.log(monObjet)
	var sChaine = '<style>' 
	              + 'table{border-collapse:collapse;}'
	              + 'td{border: 1px solid #aaa;}'
	              + '</style>' 
	              
	sChaine += '<table>'
	for(propriete in monObjet){
  	console.log(propriete  + '=>' + monObjet[propriete])
  	sChaine 	+= '<tr>'
  			+ '<td>' + propriete + '</td>' 
  			+ '<td>' + monObjet[propriete] + '</td>'
  			+ '</tr>' 	
	}
	sChaine += '</table>'

	return sChaine
}



var server = http.createServer(function(request, response) {

fs.readFile('public/data/data.json', (err, data) => {
  if (err) throw err;
  var sChaine = data.toString()
  var monObjet = JSON.parse(sChaine)
	response.writeHead(200, {"Content-Type": "text/html ; charset=utf8"});
 	response.write('<!DOCTYPE "html">');
 	response.write(maVue(monObjet));
 	response.end();
	});
})
// le port 80 est le port standard on peut alors lancer la page avec seulement : localhost
server.listen(80)