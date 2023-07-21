function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original string
    return alphanumericStr === reversedStr;
  }
  
  // Example usage
  const inputString = "A man, a plan, a canal. Panama!";
  const result = isPalindrome(inputString);
  console.log(result);
  