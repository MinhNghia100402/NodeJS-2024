var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "DESKTOP-JFTMLV7/nghia",
    password: "",
    database: "QLNhanVien"
  });
  
module.exports = conn;