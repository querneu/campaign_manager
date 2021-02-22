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
                            //Verifica se o login existe
                            if (!apelido) {
                                //Se não existir retorna false
                                return done(null, false, { message: "Login e/ou senha inválidos." })
                            }
                            bcrypt.compare(senha, apelido.senha, (erro, equalsPassword) => {
                                if (equalsPassword) {
                                    //Acessa o sistema
                                    return done(null, apelido)
                                } else {
                                    // Se existir, porem senha errada
                                    return done(null, false, { message: "Senha inválida." })
                                }
                            })
                        }
                    )
            }
        )
    )
    passport.serializeUser((apelido, done)=>{
        done(null,apelido)
    })
    passport.deserializeUser((apelido,done)=>{
        done(null,apelido)
    })
    
}

