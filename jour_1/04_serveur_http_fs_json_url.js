var http = require('http');
var fs = require('fs');
var url = require('url');

//lire un fichier JSON
function lireJSON(err, data) {
    if (err)
        throw err
    provinces = JSON.parse(data)
}

//montrer les provinces selon les données reçues du fichier JSON
function montrerLesProvinces(provinces) {
    // chaine de caractère qui contient les provinces/etats
    let stringProvinces = "";
    // pour chaque province dans le tableau provinces
    for (province in provinces) {
        stringProvinces += `
            <tr>
                <td style="border: 1px solid black">
                    ${province}
                </td>
                <td style="border: 1px solid black">
                    ${provinces[province]}
                </td>
            </tr>`
    }
    return stringProvinces;
}

// Créer un serveur
http.createServer((request, response) => {
    // On extrait de la requête «request» le chemin  qui nous donnera le nom de fichier
    console.log(request.url)
    console.log(url.parse(request.url))

    var pathname = url.parse(request.url).pathname;
    console.log(pathname)

    // Lire par le «fs» (file système) le fichier de la requête
    // le slice(1) permet de retirer le premier caractère
    fs.readFile(pathname.slice(1) + ".json", (err, data) => {
        if (err) {
            // si une erreur, affiche erreur 404
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // sinon, affiche la page
            response.writeHead(200, {'Content-Type': 'text/html'});
            //récupérer les données du fichier
            provinces = JSON.parse(data)
            // affiche le contenu du fichier dans la page HTML
            const table = `
                <table style='font-size: 2em; text-align: center; margin: 0 auto; width: 80%;'>
                    ${montrerLesProvinces(provinces)}
                </table>`;
            response.write(table);
        }
        // transmet la reponse
        response.end();
    });
}).listen(8080);

// message console
console.log('Serveur se trouvant à http://127.0.0.1:8080/');


