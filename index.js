const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');

const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use( express.static('public'));

//lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));
// Eventos del CRUD
app.use('/api/events', require('./routes/events'));


//Escuchando peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor en el puerto ${process.env.PORT}` )
});