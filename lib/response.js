/**
 * Getting data from request and passing them to response
 * Then, send back to the user
 */

const response = (response, resData, statusCode) => {
    // const { statusCode } = response;
    response.writeHead(statusCode, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(resData));
}

module.exports = response;
