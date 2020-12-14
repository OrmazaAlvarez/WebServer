const http = require('http');


http.createServer((req, res) => {
    let salida = {
        nombre: 'Lenin',
        edad: 33,
        url: req.url
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
        //res.write('Hola Mundo!!');
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);
console.log('Escuchando el puerto 8080');