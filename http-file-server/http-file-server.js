const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const filename = process.argv[3];

const server = http.createServer((req, res) => {
    fs.createReadStream(filename).pipe(res);
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});