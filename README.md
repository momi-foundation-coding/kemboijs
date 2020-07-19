[![CircleCI](https://circleci.com/gh/kemboijs/kemboijs.svg?style=svg)](https://circleci.com/gh/kemboijs/kemboijs)
[![Maintainability](https://api.codeclimate.com/v1/badges/907ee7a5580bf5e511fe/maintainability)](https://codeclimate.com/github/kemboijs/kemboijs/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/907ee7a5580bf5e511fe/test_coverage)](https://codeclimate.com/github/kemboijs/kemboijs/test_coverage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kemboijs/kemboijs/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/kemboijs.svg)](https://badge.fury.io/js/kemboijs)
![npm](https://img.shields.io/npm/dt/kemboijs.svg)

# KemboiJS

A NodeJS API-based framework. The framework is at its initial state and development is currently being worked on. Therefore, expect to see incomplete work.


# Philosophy

The current web development development is based on API and microservices. Templating usage has reduced for the past few years.
In todays enterprise software, micro-services design patterns has been adopted. REST APIs tend to provide simple, stateless, and highly decoupled business worksflows. 
Also, more sophisticated architectures rely on API gateway that is fast. The following can be handled by REST API, SSL termination, logging, content/file compressions, authentication and authorization, caching,and even load blancing. 
The usage of c++ addons in nodejs community is increasing and its experimental process is one of major success.
With such growth, there is a higher possibility of creating server with an optimized code as C++ allow for Single Instruction, Multiple Data (SIMD). It optimization performance during compilation. Leveraging API and C++ for better server development, kemboijs is striving towards making it better and easier to work with.


# Installation

This is a [NodeJS](https://nodejs.org/en/) module available through [npm registry](https://www.npmjs.com/package/kemboijs).
Installation is done using npm install command

```bash
$ npm install kemboijs
```

# Tests

```bash
$ npm test
```

# Example and Usage
```javascript 
const Server = require('kemboijs');

const port = 8001;
const app = new Server()

/**
 * CRUD implementation
 * POST, GET, PUT, DELETE
 */
app.get('/', (req, res) => {
    // send takes result, status(optional)
    res.send({
        result: "Hello World!",
        method: 'GET'
    }, 200)
})

app.post('/', (req, res) => {
    res.send({
        result: "Hello World!",
        method: 'POST'
    }, 201)
})

app.put('/', (req, res) => {
    res.send({
        result: "Hello World - Edited!",
        method: 'PUT'
    }, 200)
})

app.del('/', (req, res) => {
    res.send({
        result: "Deleted successfully",
        method: 'DELETE'
    }, 200)
})

app.listen(port, () => {
    console.log(`The server is listenng to http://127.0.0.1:${port}`)
});
```

# Support

- [Documentation](https://github.com/me-x-mi/kemboijs)
- [Community Support](https://github.com/me-x-mi/kemboijs)
- [Wiki Page](https://github.com/me-x-mi/kemboijs/wiki)
- [Tutorials](https://github.com/me-x-mi/kemboijs)
- [Frequent Asked Questions(FAQ)](https://github.com/me-x-mi/kemboijs)

# Issue Submission

Read [submission guideline](https://github.com/me-x-mi/kemboijs/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) and [code of conduct](https://github.com/me-x-mi/kemboijs/blob/master/CODE_OF_CONDUCT.md) before opening an issue.

# Contribute

There are several ways for contributing

1. Adding new features or fixing bugs
2. Improving documentation
3. Raising issues and/or bugs
4. Writing tutorials
5. Writing tests

Please read our [contribution guide](https://github.com/me-x-mi/kemboijs/blob/master/CONTRIBUTING.md) and check that build pass before and your branch is updated to `upstream` submitting any pull request.  

# Licence

[MIT](https://github.com/me-x-mi/kemboijs/blob/master/LICENSE) © 2019 [Ezrqn Kemboi](https://www.ezrqnkemboi.dev/)

# Disclaimer

All ideas expressed here are mine and does not does not reflect any company or organization. All contributors should also express their ideas without making associations to any organization.
