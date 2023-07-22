function generateRandomNumber(min, max) {
    // Generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Return the generated random number
    return randomNumber;
  }
  
  // Example usage
  const min = 1;
  const max = 10;
  const randomNumber = generateRandomNumber(min, max);
  console.log(randomNumber);
  