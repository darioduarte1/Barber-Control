const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
    nome: {
        type: String,
        required: [true, 'Nombre es obligatorio.'],
    },
    telefone: {
        type: String,
        required: [true, 'Telefone es obligatorio.'],
    },
    email: {
        type: String,
        required: [true, 'Email es obligatorio.'],
    },
    password: {
        type: String,
        default: null,
    },
    foto: {
        type: String,
        required: [true, 'Foto es obligatorio.'],
    },
    dataNascimento: {
        type: String, // YYYY-MM-DD
        required: [true, 'Data Nacimiento es obligatorio.'],
    },
    sexo: {
        type: String,
        required: [true, 'Sexo es obligatorio.'],
        enum: ['M', 'F'],
    },
    status: {
        type: String,
        required: [true, 'Status es obligatorio.'],
        enum: ['A', 'I'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Colaborador', colaborador);
