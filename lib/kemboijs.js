"use strict"

const http = require('http');
// Internally created modules
const { getRequest, postRequest, deleteRequest } = require('./request');

class Server {
  constructor() {
    this.app = http.createServer(this);
  }

  listen() {
    return this.app.listen.apply(this.app, arguments);
  }

  get(path) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'GET') {
        getRequest(req, res)
      }
    })
  }

  post(path) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'POST') {
        postRequest(req, res);
      }
    })
  }

  put(path) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'PUT') {
        postRequest(req, res);
      }
    })
  }

  del(path) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'DELETE') {
        deleteRequest(req, res);
      }
    })
  }
}

module.exports = Server;
