// Run npm install prompt-sync in the terminal
// const prompt = require('prompt-sync')();
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name?');
console.log('your name is:'+ name);
