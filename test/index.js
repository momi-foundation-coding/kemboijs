const Server = require('../index');

const app = new Server();

describe("Start Server Application", () => {
    const port = 8080;
    // Start app
    beforeEach(done => {
        done();
        // Listen to port 3000 for tests
        app.listen(port)
    });

    // GET request
    it('should do GET request', () => {
        app.get('/', (req, res) => {
            console.log({ res })
            res.send({
                message: "GET request"
            }, 200)
        });
    });

    // POST request
    it('should do POST request', () => {
        app.post('/', (req, res) => {
            res.send({
                message: "POST request"
            }, 201)
        })
    })

    // PUT request
    it('should do PUT request', () => {
        app.put('/', (req, res) => {
            res.send({
                message: "PUT request"
            }, 200)
        });
    });

    // POST request
    it('should do DELETE request', () => {
        app.del('/', (req, res) => {
            res.send({
                message: "DELETE request"
            }, 200)
        });
    });

    // Close the server
    after(done => {
        done();
    })
})
