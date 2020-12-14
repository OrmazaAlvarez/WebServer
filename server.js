const express = require('express');
const app = express();
app.get('/', (req, res) => {
    //res.send('Hola mundo!!');
    let salida = {
        nombre: 'Lenin',
        edad: 33,
        url: req.url
    };
    res.send(salida);
});
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 8080');
});