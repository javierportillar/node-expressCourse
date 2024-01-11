const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello World');
    response.end();
  }
  if(request.url === '/about') {
    response.write('About Page');
    response.end();
  }
  response.end(`
    <h1>Oops!</h1>`); // default response
});

server.listen(3000);