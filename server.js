const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello, World!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
