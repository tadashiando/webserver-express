const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'tadashi ando'
    });

});

app.get('/about', (req, res) => {
    res.render('about');

});

app.get('/data', (req, res) => {
    // res.send('Hello World');
    let salida = {
        nombre: 'Eduardo',
        edad: 32,
        url: req.url
    };
    res.send(salida);
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});