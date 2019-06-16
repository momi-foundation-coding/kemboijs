const kemboijs = require('../index')
const assert = require('assert')

describe("Start server", function () {
    let server;
    const port = 8080;
    // Start server
    before(done => {
        server = kemboijs();
        done();
        // Listen to port 3000 for tests
        server.listen(port)
    });
    // Test if server starts
    it('start kemboijs server', function () {
        // Get the port running the server
        const serverEntries = Object.values(server);
        let portRunning;
        serverEntries.filter(value => {
            portRunning = value;
        });
        assert.equal(portRunning, '6::::8080')
    });
    // Close the server
    after(done => {
        done();
    })
})
