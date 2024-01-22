const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  // Home Page
  if(url==='/'){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello, World!</h1>');
  res.end();
  // res.end('<h1>¡Hello, World!</h1>');
  }
  // About Page
  else if(url==='/about'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  }
  // 404
  else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});


server.listen(4000);