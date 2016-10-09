'use strict';

const https       = require('https'),
      Joke        = require('./Entity/Joke'),
      JokeMapper  = require('./Mapper/Joke'),
      pkg         = require('../package.json'),
      querystring = require('querystring'),
      url         = require('url'),
      util        = require('util');

/**
 * Create a new chuck instance
 * @constructor
 */
function Chuck() {
    if (!(this instanceof Chuck)) {
        return new Chuck()
    }

    this.basePath      = '/';
    this.clientVersion = pkg.version;
    this.hostName      = 'api.chucknorris.io';
    this.port          = 443;
}

/**
 * Call chuck norris api
 * @param  {String} method
 * @param  {String} path
 * @param  {Object} query
 * @param  {Object} headers
 * @param  {Object} body
 * @return {Promise}
 */
Chuck.prototype._request = function(method, path, query, headers, body) {
    const options = {
            hostname : this.hostName,
            headers  : headers ? headers : null,
            path     : url.resolve(this.basePath, path) + (query ? '?' + querystring.stringify(query) : ''),
            port     : this.port,
            method   : method
        },
        requestBody = body ? JSON.stringify(body) : null;

    return new Promise(function(resolve, reject) {
        const req = https.request(options, function(res) {
            let body = '';

            res.setEncoding('utf8')
                .on('data', function(data) {
                    body += data;
                })
                .on('end', function() {
                    resolve({
                        body       : body ? body : null,
                        statusCode : res.statusCode,
                        headers    : res.headers
                    });
                });
        });

        req.end(requestBody);

        req.on('error', function(err) {
            reject(err);
        });
    });
};

/**
 * Return the current version of the chuck api client
 * @return {String}
 */
Chuck.prototype.getClientVersion = function() {
    return this.clientVersion;
};

/**
 * Retrieve a random chuck joke
 * @return {Promise}
 */
Chuck.prototype.getRandomJoke = function() {
    const response = this._request('get', 'jokes/random', null, {
        'accept'       : 'application/json',
        'user-agent'   : util.format('chucknorris-io/client-nodejs#v%s', pkg.version)
    });

    return new Promise(function(resolve, reject) {
        response.then(JokeMapper.fromApiResponse).then(resolve).catch(reject);
    });
};

module.exports = Chuck;
