require('dotenv').config()
const mssql = require("mssql");
var sideA =
{
    user: process.env.SIDEA_USER,
    password: process.env.SIDEA_PASSWORD,
    server: process.env.SIDEA_SERVER,
    database: process.env.SIDEA_DATABASE
}
var hds =
{
    user: process.env.HDS_USER,
    password: process.env.HDS_PASSWORD,
    server: process.env.HDS_SERVER,
    database: process.env.HDS_DATABASE,
    connectionTimeout: process.env.HDS_CONNECTIONTIMEOUT,
    requestTimeout: process.env.HDS_REQUESTTIMEOUT,
    pool: {
        max: process.env.HDS_MAX_CONN,
        min: process.env.HDS_MIN_CONN
    }
}

var campanha =
{
    user: process.env.SIDEA_USER,
    password: process.env.SIDEA_PASSWORD,
    server: process.env.SIDEA_SERVER,
    database: process.env.CAMPANHAS_DATABASE
}
var dbSideA = new mssql.ConnectionPool(sideA);
var dbHds = new mssql.ConnectionPool(hds);
var dbCampanha = new mssql.ConnectionPool(campanha);

dbSideA.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conectado ao SideA")
    }
});
dbHds.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conectado ao HDS")
    }
});
dbCampanha.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conectado ao CampanhaA")
    }
});
module.exports = { db_hds: dbHds, db_sideA: dbSideA, db_campanha: dbCampanha };