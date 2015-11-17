var express = require('express');
var app = express();

/**
 * Adding simple middleware with express
 *
 * Middleware := function that receives the request and response objects of the HTTP cycle
 * and is invoked by the Express.js routing layer before it reaches the final request handler
 * It may:
 *  - modify/transform these objects, passing them to the next middleware
 *  - write to the response
 *  - end the chain
 */

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    // continue to the next middleware - or reach router
    next();
}

// use the defined middleware function
app.use(logger);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

/**
 * Another important use of middleware in routing is error handling
 * ex. if no route matched so far, then reply with 404
 */
app.use(function (req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});