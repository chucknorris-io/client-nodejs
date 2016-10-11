'use strict';

const https                = require('https'),
      Joke                 = require('./Entity/Joke'),
      JokeCollection       = require('./Entity/JokeCollection'),
      JokeMapper           = require('./Mapper/Joke'),
      JokeCollectionMapper = require('./Mapper/JokeCollection'),
      pkg                  = require('../package.json'),
      querystring          = require('querystring'),
      url                  = require('url'),
      util                 = require('util');

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
 * Retrieve a list of available categories
 * @return {Promise}
 */
Chuck.prototype.getJokeCategories = function(category) {
    const response = this._request('get', 'jokes/categories', null, {
        'accept'     : 'application/json',
        'user-agent' : util.format('chucknorris-io/client-nodejs#v%s', pkg.version)
    });

    return new Promise(function(resolve, reject) {
        response.then(function(response) {
            resolve(
                JSON.parse(response.body)
            );
        }).catch(reject);
    });
};

/**
 * Retrieve a random chuck joke
 * @param  {String} category
 * @return {Promise}
 */
Chuck.prototype.getRandomJoke = function(category) {
    const query = {};

    if (category) {
        query.category = category;
    }

    const response = this._request('get', 'jokes/random', query, {
        'accept'     : 'application/json',
        'user-agent' : util.format('chucknorris-io/client-nodejs#v%s', pkg.version)
    });

    return new Promise(function(resolve, reject) {
        response.then(JokeMapper.fromApiResponse).then(resolve).catch(reject);
    });
};

/**
 * Free text search
 * @param  {String} searchTerm
 * @return {Promise}
 */
Chuck.prototype.search = function(searchTerm) {
    const query = {
        query : searchTerm
    };

    const response = this._request('get', 'jokes/search', query, {
        'accept'     : 'application/json',
        'user-agent' : util.format('chucknorris-io/client-nodejs#v%s', pkg.version)
    });

    return new Promise(function(resolve, reject) {
        response.then(JokeCollectionMapper.fromApiResponse).then(resolve).catch(reject);
    });
};

module.exports = Chuck;
