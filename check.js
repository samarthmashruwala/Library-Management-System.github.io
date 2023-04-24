var http = require('http'); 
var options = { 
 host: 'index.html', 
 path: './162', 
 method: 'GET' 
}; 
// Making a get request to 'www.amrolicollege.org' 
http.createServer(function(options,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('index.html');
}).listen(8081);

console.log('connected');