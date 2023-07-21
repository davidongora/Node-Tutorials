const http = require('http');

function makeHttpGetRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        resolve(responseBody);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Example usage
const url = 'https://chat.openai.com';
makeHttpGetRequest(url)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
