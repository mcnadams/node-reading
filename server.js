const http = require('http');

function start() {
    function onRequest(request, response) {
        console.log('request received');
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello World');
        response.end();
    }
         
    http.createServer(onRequest).listen(8888);
    
    console.log('server has started');
}

//not sure if this is correct or should be using module.exports
exports.start = start;

