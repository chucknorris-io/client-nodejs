'use strict';

var Joke = require('./chuck/joke.js');
var url = require('url');
var request = require('request');

var VERSION = require('../package.json').version;

function Chuck() {
    if (!(this instanceof Chuck)) {
        return new Chuck()
    }

    this.BASE_URL = 'https://api.chucknorris.io';
    this.VERSION = VERSION;
}

Chuck.prototype.__request = function(method, path, callback) {

    var endpoint = url.resolve(this.BASE_URL, path);

    request(endpoint, function(error, response, data) {
        if (error) {
            callback(error, data, response);
        } else {
            try {
                data = JSON.parse(data);
            } catch (parseError) {
                return callback(
                    new Error('Status Code: ' + response.statusCode),
                    data,
                    response
                );

            }
            if (typeof data.errors !== 'undefined') {
                callback(data.errors, data, response);
            } else if (response.statusCode !== 200) {
                callback(
                    new Error('Status Code: ' + response.statusCode),
                    data,
                    response
                );
            } else {
                callback(null, data, response);
            }
        }
    });
};

Chuck.prototype.getClientVersion = function() {
    return this.VERSION;
};

Chuck.prototype.getRandomJoke = function(callback) {
    return this.__request('get', 'jokes/random', function(error, response) {
        if (error) {
            callback(error, response);
        } else {
            callback(
                error,
                new Joke(
                    response.id,
                    response.value,
                    response.url,
                    response.icon_url
                )
            );
        }
    });
};

module.exports = Chuck;
