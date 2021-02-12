// IMPORTANDO AS DEPENDENCIAS
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/campaign_manager', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;


module.exports = mongoose;