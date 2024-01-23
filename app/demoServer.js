// const http = require('node:http');

// const hostname = 'localhost'; // define localhost
// const port = 3000; // define port

// const server = // define server 
//     http.createServer((req, res) => {
//         res.statusCode = 200;    // status
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('hello world   ');
//     });



// server.listen(port,hostname,
//     () => {
//         console.log(`Server running at http://${hostname}:${port}/`);
//     });




// =================================================================
// import modules in our file 
// // const { mydateTime } = require('./first_function');
// var dt = require('./first_function');

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200), {'Content-Type': 'text/html'};
//     res.end('hello world' + dt.mydateTime() );
// }).listen(3000);

//================================================================
// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res)
// {
//     res.writeHead(200, {'content-type': 'text/html'});
//     var q = url.parse(req.url,true).query;
//     // return the year and month from the query object
//     var txt = q.year + " " + q.month ;
//     // to link is : localhost:<port>/?year=*** & month=***
//     res.end(txt);
// }).listen(3000);



// var fir = require('./first_function');

function fc1(data,callback)
{
    data = 0;
    callback(data);
}
function fc2(data,callback){
    data = 5;
    return (data,callback);
}

function fc3()
{
    const d = 10;
    
    fc2(d,function(result){
        console.log(result);
    }
    )
    
}
fc3();


