const fs = require('fs');

const contents = fs.readFileSync(process.argv[2], 'utf8');
const lines = contents.split('\n').length - 1;

console.log(lines);
// This script reads a file synchronously and counts the number of lines in it.
// Usage: node my-first-io.js <filename>

// Note: This is a synchronous version of reading a file, which blocks the event loop.
// For non-blocking I/O, consider using fs.readFile() with a callback or promises.
// Example usage: node my-first-io.js example.txt
// This will read the file 'example.txt' and print the number of lines in it.
// Ensure that the file exists and is accessible in the current directory.
// If the file does not exist or there are permission issues, an error will be thrown.
// This script is a simple demonstration of how to read files in Node.js using the 'fs' module.
// You can modify it to perform other operations on the file contents as needed.
// For example, you could count words, search for specific text, or process the data in other ways.
// Remember to handle errors appropriately in a production environment to avoid crashes.
// This script is useful for learning how to work with files in Node.js and can be extended for more complex tasks.     