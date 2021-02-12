require('dotenv-safe').config();
const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');


routes.get('/login', (req,res,next)=>{

})
routes.get('/',(req,res)=>{
    res.json({teste: "Hello world!"})
})
module.exports = routes