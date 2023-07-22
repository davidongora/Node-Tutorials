const axios =require('axios');
axios.get('https://api.example.com/jokes/random')
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
