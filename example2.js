var http = require("http");

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE \"html\">");
    response.write("<html  lang=\"en\">");
    response.write("<head>");
    response.write("<meta charset=\"UTF-8\">");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>Hello World!</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");