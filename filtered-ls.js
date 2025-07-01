const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dirPath, (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach(file => {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
});

// Usage: node filtered-ls.js <directory> <extension>
// This script lists all files in the specified directory that have the given extension.
// It uses the 'fs' module to read the directory and 'path' module to check file extensions.
// Make sure to provide the directory path and the file extension as command line arguments.
// Example: node filtered-ls.js /path/to/directory txt
// This will list all '.txt' files in the specified directory.
// Note: Ensure that the directory exists and you have permission to read it.
// If you encounter any errors, check the directory path and the extension provided.
// The script will print the names of the files that match the specified extension.
// This is a simple example of using Node.js to filter files in a directory based on their extension.
// Make sure to run this script in an environment where Node.js is installed and the 'fs' and 'path' modules are available.
// You can modify the directory and extension in the command line arguments to test with different inputs.
// This script is useful for quickly filtering files in a directory without needing to write complex code.
// It can be extended or modified to include additional functionality as needed.
// Ensure that you have the necessary permissions to read the directory and its contents.
// If you want to filter files based on different criteria, you can modify the condition inside the forEach loop.
// This script is a good starting point for learning how to work with file systems in Node.js.
// You can also integrate it into larger applications where file filtering is required.
// Remember to handle any potential errors gracefully in a production environment.
// This script is a practical example of using Node.js for file system operations.
// It demonstrates how to read a directory and filter files based on their extensions.
// You can use this as a foundation for more complex file handling tasks in your Node.js applications.      