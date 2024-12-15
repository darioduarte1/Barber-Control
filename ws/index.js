const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

// MIDDLEWARES
app.use(morgan('dev')); //solamente funciona en ambiente de desenvolvimento 
app.use(express.json()); //para poder trabajar con datos del tipo JSON
app.use(cors()); //para poder trabajar con CORS


// VARIABLES
app.set('port', 8000); //port do backend

// ROUTES
app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () =>{
    console.log(`WS Escuchando en la port ${app.get('port')}`);    
});