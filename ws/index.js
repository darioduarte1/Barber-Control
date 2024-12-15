const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');

// MIDDLEWARES
app.use(morgan('dev')); //solamente funciona en ambiente de desenvolvimento 

// VARIABLES
app.set('port', 8000); //port do backend

app.listen(app.get('port'), () =>{
    console.log(`WS Escuchando en la port ${app.get('port')}`);    
});