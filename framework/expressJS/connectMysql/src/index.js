var mysql = require('mysql');var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "db name",
    insecureAuth: true
  });
  
module.exports = {
  conn,
};