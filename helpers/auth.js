const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

//Models
const Usuario = require('../models/Usuario.model');
module.exports = (passport) => {
    passport.use(
        new localStrategy(
            { apelidoField: 'apelido', passwordField: 'senha' }, (apelido, senha, done) => {
                Usuario.findOne({
                    where: { apelido: apelido }
                })
                    .then(
                        (apelido) => {
                            if (!apelido) {
                                return done(null, false, { message: "Login e/ou senha inválidos." })
                            }
                            bcrypt.compare(senha, apelido.senha, (erro, equalsPassword) => {
                                if (equalsPassword) {
                                    return done(null, apelido)
                                } else {
                                    return done(null, false, { message: "Login e/ou senha inválidos" })
                                }
                            })
                        }
                    )
            }
        ))
}

