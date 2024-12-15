const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    comissao: {
        type: Number, // % de comision sobre el precio
        required: true,
    },
    duracao: {
        type: Number, //Duracion en minutos
        required: true,
    },
    recorrencia: {
        type: Number, // Periodo que el cliente vuelve a reacaer el servicio en dias
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: [true, 'Foto es obligatorio.'],
        enum: ['A', 'I', 'E'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Servico', servico);
