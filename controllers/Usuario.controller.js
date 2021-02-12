const express = require('express');

const Usuario = require('../models/Usuario.model');

const router = express.Router();

router.post('/registrar', async (req, res) => {
    const { apelido } = req.body.apelido;
    try {
        if (await Usuario.findOne({ apelido })) {
            return res.status(400).json({ error: 'Usuário já cadastrado.' });
        }
        const usuario = await Usuario.create(req.body);
        return res.status(201).json({ success: 'Usuário criado com sucesso!' });
    } catch (err) {
        return res.status(500).json({ error: 'Falha ao realizar a requisição, tente novamente!' });
    }
});


router.get('/usuarios', async(req,res)=>{
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
});


module.exports = app => app.use('/usuarios', router);