"use strict"

const http = require('http');
// Internally created modules
const { getRequest, postRequest, deleteRequest } = require('./request');

const Server = function () {
  let app = http.createServer(this);

  const listen = function () {
    return app.listen.apply(app, arguments);
  }

  const get = function (path) {
    app.on('request', (req, res) => {
      if (req.url === path && req.method === 'GET') {
        getRequest(req, res);
      }
    });
  }

  const post = function (path) {
    app.on('request', (req, res) => {
      if (req.url === path && req.method === 'POST') {
        postRequest(req, res);
      }
    })
  }

  const put = function (path) {
    app.on('request', (req, res) => {
      if (req.url === path && req.method === 'PUT') {
        postRequest(req, res);
      }
    })
  }

  const del = function (path) {
    app.on('request', (req, res) => {
      if (req.url === path && req.method === 'DELETE') {
        deleteRequest(req, res);
      }
    })
  }

  return {
    listen,
    get,
    post,
    put,
    del
  }
};

module.exports = new Server();
