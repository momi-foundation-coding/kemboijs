const kemboijs = require('kemboijs');

const hostname = '127.0.0.1';
const port = 8000;

// Instantiate kemboijs instance
const app = kemboijs();

app.listen(port, () => {
    console.log(`The server is listenng to http://${hostname}/${port}`)
});
