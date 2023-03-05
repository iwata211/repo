let http = require('http');
let html = require('fs').readSync('upfile.html');
const PORT = 8080;

http.createServer(function(req,res) {

    if(req.method === 'GET') {
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(html);
    } else if(req.method === 'POST') {
        let data = '';

        req.on('data', function(chunk) {data += chunk})
           .on('end', function() {
            console.log(data);
            res.end(html);
           })
    }
}).listen(PORT);