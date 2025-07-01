
const filterFn = require('./mymodule.js');

const dirPath = process.argv[2];
const filterStr = process.argv[3];

filterFn(dirPath, filterStr, (err, list) => {
    if (err) {
        return console.error('There was an error:', err);
    }
    list.forEach(file => {
        console.log(file);
    });
});
// Usage: node make-it-modular.js <directory> <extension>     