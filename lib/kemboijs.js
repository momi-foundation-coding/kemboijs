"use strict"

const http = require('http');

// Internally created modules
const req = require('./request');

// Creating a new instance of kemboijs server

function KemboijsServer() {
    // Create new server connection
    const server = http.createServer(this);

    server.on('request', (request, response) => {
        return req(request, response)
    });

    return server;
}

exports = module.exports = KemboijsServer;
