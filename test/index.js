const server = require('../index');

describe("Start server", function () {
    const port = 8080;
    // Start server
    before(done => {
        done();
        // Listen to port 3000 for tests
        server.listen(port)
    });

    // GET request
    it('should do GET request', () => {
        server.get('/');
    });

    // POST request
    it('should do POST request', () => {
        server.post('/');
    });

    // PUT request
    it('should do PUT request', () => {
        server.put('/');
    });

    // POST request
    it('should do DELETE request', () => {
        server.del('/');
    });

    // Close the server
    after(done => {
        done();
    })
})
