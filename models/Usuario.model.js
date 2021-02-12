const mongoose = require('../database/mongo');

//Usuário schema
const UsuarioSchema = new mongoose.Schema({
    apelido: {
        type: String,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    permissions: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, { timestamps: true }
);
const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;