const config = require('../config');
const mysql = require('mysql');

const connect = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.uname,
    password: config.pname,
    database: config.db
})

module.exports = connect;