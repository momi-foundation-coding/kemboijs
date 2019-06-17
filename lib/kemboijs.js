"use strict"

const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Creating a new instance of kemboijs server
const kemboijsServer = () => {
    /**
     * Check to make sure that port and hostname is provided
     * serverLogName is optional
    */

    // Create server
    const server = http.createServer((request, response) => {
        // const reqUrl = url.parse(request.url, true);
        const badRequestResponse = {
            "message": "Bad request"
        };
        const internalServerError = {
            "message": "Internal Server Error Occurred"
        };
        const methodNotAllowed = {
            "Message": "Method Not Allowed"
        };
        // let jsonifiedData;
        let bodyResult;
        let parsedData;
        let body;
        // Return query params 
        let params;
        switch (request.method) {
            case 'GET':
                body = [];
                request.on('data', (chunk) => {
                    body.push(chunk);
                }).on('end', () => {
                    body = Buffer.concat(body).toString();
                    parsedData = JSON.parse(body);
                    response.writeHead(200, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(parsedData));
                }).on('error', () => {
                    response.writeHead(500, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(internalServerError));
                });
                break;
            case 'POST':
            case 'PUT':
            case 'PATCH':
                body = [];
                request.on('data', (chunk) => {
                    // Data are in buffer form here
                    body.push(chunk);
                }).on('end', () => {
                    /**
                     * Make validation  of data here before returning errors 
                     * such as email validations, data types etc. 
                     */
                    // Bad request if there is nothing in the body
                    if (!body || body.length <= 0) {
                        response.writeHead(400, { 'Content-Type': 'application/json' });
                        response.end(JSON.stringify(badRequestResponse))
                    }
                    // Buffered data. In future consider changing it to json
                    body = Buffer.concat(body).toString();
                    // Convert data to javascript object
                    bodyResult = JSON.parse(body);
                    /**
                     * Allow user to massage data here, e.g 
                     * Add some other response such body.message = "Message", 
                     * Which was not initially in the body
                    */
                    response.writeHead(200, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(bodyResult));
                }).on('error', () => {
                    response.writeHead(500, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify(internalServerError));
                });
                break;
            case 'DELETE':
                // Remove an item from the url;
                const parseUrlData = url.parse(request.url);
                const { query } = parseUrlData;
                const parseQueryString = querystring.parse(query);
                // Assign params to send to the app
                params = parseQueryString;
                /**
                 * Just get a way to pass these params to the server 
                 * while running for data manipulations
                 */
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(params));
                break;
            default:
                response.writeHead(405, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(methodNotAllowed));
                break;
        }
    })

    /**
     * At first, make sure to check if message is provided or not
     */
    return server;
}

exports = module.exports = kemboijsServer;
