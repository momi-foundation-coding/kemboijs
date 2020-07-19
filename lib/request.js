/**
 * Enable users to send their requests to kemboijs
 */

const url = require('url');
const querystring = require('querystring');

// All local imports from kemboijs
const response = require('./response');

const getRequest = function (req, res, callback) {
    let body = [];
    let data;

    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        data = body ? JSON.parse(body) : "I need just result"
        // response(res, data, statusCode, callback);
        const response =  {
            send(data, statusCode) {
                // write head as application/json and status set up
                if(!statusCode) {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                } else {
                    res.writeHead(statusCode, { 'Content-Type': 'application/json' })
                }
                res.end(JSON.stringify(data))
            }
        }
        // return the callback with response
        callback(null, response); 
    }).on('error', () => {
        // write to head and error message on body
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: "Internal Server Error Occurred" }))
    })
}

const postRequest = function (req, res, callback) {
    let body = [];
    // let data;

    req.on('data', (chunk) => {
        // Data are in buffer form here
        body.push(chunk);
    }).on('end', () => {
        /**
         * Make validation  of data here before returning errors 
         * such as email validations, data types etc. > just make a return response
         * if any validations is missed or not met, that allow not much checking 
         * e.g if null function is received return res.send(error)
         * -> also, allow data processing here and adding them to our response
         */
        // body = Buffer.concat(body).toString();
        //     // Convert data to javascript object
        // bodyResult = JSON.parse(body);
        
        const response =  {
            send(data, statusCode) {
                // write head as application/json and status set up
                if(!statusCode) {
                    res.writeHead(201, { 'Content-Type': 'application/json' })
                } else {
                    res.writeHead(statusCode, { 'Content-Type': 'application/json' })
                }
                res.end(JSON.stringify(data))
            }
        }
        // return the callback with response
        callback(null, response);
    }).on('error', () => {
        // write to head and error message on body
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: "Internal Server Error Occurred" }))
    });
}

const deleteRequest = function (req, res) {
    // Remove an item from the url;
    const parseUrlData = url.parse(req.url);
    const { query } = parseUrlData;
    const parseQueryString = querystring.parse(query);
    // Assign params to send to the app
    const params = parseQueryString;
    /**
     * Just get a way to pass these params to the server 
     * while running for data manipulations
     */
    const statusCode = 200;
    const data = params;
    // Always in the flow of response, resData and statusCode
    response(res, data, statusCode);
}

const notAllowedMethodRequest = function (req, res) {
    // write to head and error message on body for method not allowed
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: "Method Not Allowed" }))
}

module.exports = {
    getRequest,
    postRequest,
    deleteRequest,
    notAllowedMethodRequest
}
