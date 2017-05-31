fs = require('fs')

fs.readFile('public/data/data.json', (err, data) => {
  if (err) throw err;
  var sChaine = data.toString()
  var monObjet = JSON.parse(sChaine)
  
  console.log(monObjet)

for(propriete in monObjet){
  console.log(propriete  + '=>' + monObjet[propriete])	
}

});