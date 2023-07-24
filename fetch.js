// Example function that accepts a callback
function fetchData(url, callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Some fetched data';
      callback(data);
    }, 2000);
  }
  
  // Example callback function
  function processFetchedData(data) {
    console.log('Processing fetched data:', data);
    console.log(data);

  }
  
  // Usage of the fetchData function with the callback
  fetchData('https://jokes.com', processFetchedData);

  fetch('https://url', {
    method: 'POST',
    headers:{
        'content-Type' : 'application/json'
    },

    body: JSON.stringify({
        name: 'User 1'
    })
})
.then(res => {
    if (res.ok) {
        console.log('success')
    } else {
        console.log("not succesful")
    }
    res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))