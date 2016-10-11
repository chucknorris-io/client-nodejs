'use strict';

const Joke       = require('../Entity/Joke'),
      JokeMapper = module.exports = {};

/**
 * Create an instance of Joke from an api response object
 * @param  {Object} response
 * @throws {TypeError}
 * @throws {Error}
 * @return {Joke}
 */
JokeMapper.fromApiResponse = function(response) {
    if ('object' !== typeof response) {
        throw new TypeError('Argument "response" must be of type object.');
    }

    if (! response.hasOwnProperty('body')) {
        throw new Error('Response object must have a property "body".');
    }

    return JokeMapper.fromJson(response.body);
};

/**
 * Create an instance of Joke from json string or object
 * @param  {Object|String} json
 * @throws {TypeError}
 * @return {Joke}
 */
JokeMapper.fromJson = function(json) {
    let data;

    switch (typeof json) {
        case 'object':
            data = json;
            break;

        case 'string':
            data = JSON.parse(json);
            break;

        default:
            throw new TypeError('Argument "json" must be of type string or object.');
    }

    return new Joke(data.category, data.icon_url, data.id, data.url, data.value);
};
