//db
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Bookface123qw',
    database : 'picturesdb'
});

module.exports = connection;