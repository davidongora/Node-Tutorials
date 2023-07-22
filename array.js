// Implement a function that takes an array of numbers 
// as input and returns the sum of all the numbers.

function calculateSum(numbers) {
    // Check if the input array is empty
    if (numbers.length === 0) {
      return 0;
    }
  
    // Calculate the sum of all numbers in the array
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  
    // Return the sum
    return sum;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const sum = calculateSum(numbers);
//   console.log(sum);
  


// Write a function that accepts a string as input and checks if it is a palindrome. 
// The function should return true if the string is a palindrome, and false otherwise.

// Create a function that makes an HTTP GET request to a given URL.
//  The function should return a Promise that resolves with the response body as a string