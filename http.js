const http = require('http');

const server = http.createServer((req, res) => {
  // Check for the root URL
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to our Home Page');
    res.end();
  } 
  // Check for the '/about' URL
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hi! This site is built on Node.js');
    res.end();
  } 
  // Handle other URLs
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Oops!</h1>
      <p>Nothing is found here..</p>
      <a href='/'>Back to Home</a>
    `);
  }
});

// Start the server on port 4000
server.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});
