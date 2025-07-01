const net = require('net');
const port = process.argv[2];

const server = net.createServer((socket) => {
    const date = new Date();
    const text = date.getFullYear() + '-' +
        String(date.getMonth() + 1).padStart(2, '0') + '-' +
        String(date.getDate()).padStart(2, '0') + ' ' +
        String(date.getHours()).padStart(2, '0') + ':' +
        String(date.getMinutes()).padStart(2, '0') + '\n';

        
    socket.end(text);
});

server.listen(port);

server.on('error', (err) => {
    console.error(`Server error: ${err.message}`);
});

console.log(`Time server running on port ${port}`);

server.on('listening', () => {
    console.log(`Server is listening on port ${port}`);
});

server.on('close', () => {
    console.log('Server closed');
});

server.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.on('timeout', () => {
    console.log('Server timeout');
}); 
server.on('data', (data) => {
    console.log(`Received data: ${data}`);
});

server.on('drain', () => {
    console.log('Socket buffer drained');
});

server.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
});

server.on('close', () => {
    console.log('Socket closed');
});

server.on('listening', () => {
    console.log(`Server is listening on port ${port}`);
});

server.on('close', () => {
    console.log('Server closed');
});

server.on('error', (err) => {
    console.error(`Server error: ${err.message}`);
});                         