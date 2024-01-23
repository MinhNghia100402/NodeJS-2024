const conn = require('./index');
const express = require('express');
const port = 3000;

const app = express();

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
  });