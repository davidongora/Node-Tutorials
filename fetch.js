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
  