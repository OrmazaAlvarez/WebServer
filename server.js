require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

//Agregando a Express HBS engine 

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Lenin',
    title: 'Learning Node',
    year: new Date().getFullYear()
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Lenin',
    title: 'Learning Node',
    year: new Date().getFullYear()
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Lenin',
    title: 'Learning Node',
    year: new Date().getFullYear()
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
