const Server = require('kemboijs');

const hostname = '127.0.0.1';
const port = 8001;

const app = new Server()

/**
 * CRUD implementation
 * POST, GET, PUT, DELETE
 */
app.get('/', (req, res) => {
    // send takes result, status(optional)
    res.send({
        result: "Hello World!",
        method: 'GET'
    }, 200)
});

app.post('/', (req, res) => {
    res.send({
        result: "Hello World!",
        method: 'POST'
    }, 200)
});

app.put('/');

app.del('/');

app.listen(port, () => {
    console.log(`The server is listenng to http://${hostname}:${port}`)
});
