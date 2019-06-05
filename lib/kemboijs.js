"use strict"

const http = require('http');

// Creating a new instance of kemboijs server
const kemboijsServer = () => {
    /**
     * Check to make sure that port and hostname is provided
     * serverLogName is optional
    */

    // Create server
    const server = http.createServer((req, res) => {
        // Check on what parameters passed in req. Remove later
        // console.log('This is the request', req);
        let bodyResponse;
        switch (req.method) {
            case 'GET':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                bodyResponse = {
                    "message": "GET request returned."
                };
                res.end(JSON.stringify(bodyResponse));
                break;
            case 'POST':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                bodyResponse = {
                    "message": "Method passed here is POST"
                };
                res.end(JSON.stringify(bodyResponse));
                break;
            // Use fall through for the two cases 
            case 'PUT':
            case 'PATCH':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                bodyResponse = {
                    "message": "Method passed here is PUT || PATCH"
                };
                res.end(JSON.stringify(bodyResponse));
                break;
            case 'DELETE':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                bodyResponse = {
                    "message": "Method passed here is DELETE"
                };
                res.end(JSON.stringify(bodyResponse));
                break;
            default:
                res.writeHead(500, { 'Content-Type': 'application/json' });
                bodyResponse = {
                    "Message": "Unknown method called"
                }
                res.end(JSON.stringify(bodyResponse));
                break;
        }
    })

    /**
     * At first, make sure to check if message is provided or not
     */
    return server;
}

exports = module.exports = kemboijsServer;
