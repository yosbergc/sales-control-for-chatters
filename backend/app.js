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
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))

console.log(__dirname + '/public')
app.listen(3000, (request, response) => {
    console.log('Ejecutando el servidor satisfactoriamente.')
})

app.get('/', (request, response) => {
    response.send('Hola mundo')
})