var http = require("http"),
    fs = require('fs');

var sampleHtmlPath = './resources/sample2.html';
// using the following line instead will result in throwing an unhandled exception, thus server crash
//var sampleHtmlPath = './resources/sample2.html';

var server = http.createServer(function(request, response) {
    fs.readFile(sampleHtmlPath, function (err, result) {
        if (err) throw err;

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(result);
        response.end();
    })
});

// uncommenting the following section will solve the above mentioned problem
/*
process.on('uncaughtException', function(err) {
    console.error('Encountered error: ' + err);
});
*/

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");