const http = require('http');

const port = 3000;

const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
    response.end();
  }).listen(port, function () {
  console.log(`HELLO WORLD`);
});