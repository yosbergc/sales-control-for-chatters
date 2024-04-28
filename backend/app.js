// Invocamos express
const express = require('express');
const dotenv = require('dotenv')
const app = express();
// Seteamos URL encoded para poder recibir los datos del formulario
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Agregamos el path de la variable ENV.
dotenv.config({path: "./env/.env"})
// Seteamos el directorio público
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
// Asignamos el motor de plantillas
app.set('view engine', 'ejs');

// Invocamos el módulo de hashing de passwword.
const bcrypt = require('bcryptjs');
// Configuramos las variables de sesión

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

console.log(__dirname + '/public')
app.listen(3000, (request, response) => {
    console.log('Ejecutando el servidor satisfactoriamente.')
})

app.get('/', (request, response) => {
    response.send('Hola mundo')
})