const Server = require('kemboijs');

const hostname = '127.0.0.1';
const port = 8001;

const app = new Server()

/**
 * CRUD implementation
 * POST, GET, PUT, DELETE
 */
app.get('/');

app.post('/');

app.put('/');

app.del('/');

app.listen(port, () => {
    console.log(`The server is listenng to http://${hostname}:${port}`)
});
