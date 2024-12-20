const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
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

module.exports = mongoose.model('SalaoColaborador', salaoColaborador);
