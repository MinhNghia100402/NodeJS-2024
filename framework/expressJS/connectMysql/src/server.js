const conn = require('./index');
const express = require('express');
const routes = require('./routers/employessRouter');
const port = 3300;

const app = express();

app.use(express.json()); 
app.use('/api', routes);
app.listen(port,() =>{
  console.log('listening on port : locahost:'+port);
});