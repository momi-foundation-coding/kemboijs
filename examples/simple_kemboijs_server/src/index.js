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
})

app.post('/', (req, res) => {
    res.send({
        result: "Hello World!",
        method: 'POST'
    }, 201)
})

app.put('/', (req, res) => {
    res.send({
        result: "Hello World - Edited!",
        method: 'PUT'
    }, 200)
})

app.del('/', (req, res) => {
    res.send({
        result: "Deleted successfully",
        method: 'DELETE'
    }, 200)
})

app.listen(port, () => {
    console.log(`The server is listenng to http://${hostname}:${port}`)
});
