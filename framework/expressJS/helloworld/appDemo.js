const express = require('express'); // khai báo
const app = express();
const port = 3000; // define port

app.get('/first', (req, res) => {
    res.send('hello world');
});

app.listen(port,()=>
{
    console.log('localhost running in : ',port);
});