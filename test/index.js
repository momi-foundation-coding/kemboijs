const kemboijs = require('../index').kemboijs
const assert = require('assert')

describe("Start server", function () {
    let server;
    // Start server
    before(done => {
        kemboijs
        done();
    });
    it('start kemboijs server', function () {
        // Write test here
        assert.equal(1, 1)
    });
    // Close the server
    after(done => {
        done();
    })
})
