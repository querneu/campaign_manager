'use strict'
//#Imports
require('dotenv-safe').config();
const express=  require('express');
const app = express();
const bodyParser = require('body-parser');

//#Config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const routes = require('./routes/routes');
const port = process.env.PORT;

app.use('/', routes);

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
});