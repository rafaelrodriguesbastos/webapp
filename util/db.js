const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "crud",
    multipleStatements: true
});

db.connect((erro) => {
    if (erro) {
        throw erro;
    }
    console.log('Conectado ao banco de dados');
});

global.db = db;

module.exports = db;