/**
 * Getting data from request and passing them to response
 * Then, send back to the user
 */

const response = (res, data, statusCode) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data }));
}

module.exports = response;
