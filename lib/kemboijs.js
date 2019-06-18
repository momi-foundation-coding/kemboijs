"use strict"

const http = require('http');

// Internally created modules
const Request = require('./request');

// Creating a new instance of kemboijs server

function KemboijsServer() {
    // Create new server connection
    const server = http.createServer((request, response) => {
        Request.call(this, request, response);
    });
    return server;
}

exports = module.exports = KemboijsServer;
