var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    if(filename == '/') {
        filename = 'index.html'
    } else if (filename == '/about') {
        filename = 'about.html'
    } else if (filename == '/contact-me') {
        filename = 'contact-me.html'
    } else {
        filename = '404.html'
    }
    fs.readFile(filename, function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8081);