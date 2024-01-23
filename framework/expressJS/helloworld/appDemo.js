const express = require('express'); // khai báo
const routes = require('./routers/userRouter');
const app = express();
const port = 3000; // define port


app.use(express.json()); 
app.use('/api', routes);

app.listen(port,()=>
{
    console.log('localhost running in : ',port);
});