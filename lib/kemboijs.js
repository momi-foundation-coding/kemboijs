"use strict"
/**
 * Still need to be able to create more routes
 * e.g POST for /, /login, /register etc.. 
 */
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

  get(path, callback) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'GET') {
        // send req for processing and response as null
        getRequest(req, res, callback)
      } else if(req.url !== path) {
        // unavailable path/url
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: "The Url is not found" }))
      }
    })
  }

  post(path, callback) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'POST') {
        postRequest(req, res, callback);
      } else if(req.url !== path) {
        // unavailable path/url
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: "The Url is not found" }))
      }
    })
  }

  put(path, callback) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'PUT') {
        postRequest(req, res, callback);
      } else if(req.url !== path) {
        // unavailable path/url
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: "The Url is not found" }))
      }
    })
  }

  del(path, callback) {
    this.app.on('request', (req, res) => {
      if (req.url === path && req.method === 'DELETE') {
        deleteRequest(req, res, callback);
      } else if(req.url !== path) {
        // unavailable path/url
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: "The Url is not found" }))
      }
    })
  }
}

module.exports = Server;
