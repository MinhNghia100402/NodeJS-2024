var mysql = require('mysql');var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "nghialee",
    password: "1",
    database: "qlnv",
    insecureAuth: true
  });
  
module.exports = conn;