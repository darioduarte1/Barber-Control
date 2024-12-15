const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: {
        type: String,
        required: [true, 'Nombre es obligatorio.'],
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'Email es obligatorio.'],
    },
    password: {
        type: String,
        default: null,
    },
    telefone: String,
    endereco: {
        cidade: String,
        codpostal: String,
        numero: Number,
        pais: String,
    },
    geo: {
        tipo: String,
        coordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere' });

module.exports = mongoose.model('Salao', salao);
