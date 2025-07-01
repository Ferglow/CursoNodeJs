const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, filterStr, callback) {
    fs.readdir(dirPath, (err, list) => {
        if (err) {
            return callback(err);
        }

        list = list.filter(file => {
            return path.extname(file) === '.' + filterStr;
        });

        callback(null, list);
    });
};
// This module exports a function that filters files in a directory based on their extension.
// It takes three parameters: dirPath (the directory path), filterStr (the file extension to filter by),
// and a callback function that handles the results or errors.
// The function reads the directory, filters the files by the specified extension, and calls the callback with the results.
// Usage: require('./mymodule.js')(dirPath, filterStr, callback);           