const Server = require('kemboijs');

const hostname = '127.0.0.1';
const port = 8001;

const app = new Server()

/**
 * CRUD implementation
 * POST, GET, PUT, DELETE
 */
app.get('/', async (req, res) => {
    // send takes result, status(optional)
    res.send({
        result: "Hello World"
    }, 200)
});

app.post('/');

app.put('/');

app.del('/');

app.listen(port, () => {
    console.log(`The server is listenng to http://${hostname}:${port}`)
});
