const server = require('kemboijs');

const hostname = '127.0.0.1';
const port = 8000;

/**
 * CRUD implementation
 * POST, GET, PUT, DELETE
 */
server.get('/');

server.post('/');

server.put('/');

server.del('/');

server.listen(port, () => {
    console.log(`The server is listenng to http://${hostname}:${port}`)
});
