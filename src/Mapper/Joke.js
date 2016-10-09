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
 * Create an instance of Joke from a json string
 * @param  {String} jsonString
 * @throws {TypeError}
 * @return {Joke}
 */
JokeMapper.fromJson = function(jsonString) {
    if ('string' !== typeof jsonString) {
        throw new TypeError('Property "body" must be of type string.');
    }

    const data = JSON.parse(jsonString);

    return new Joke(
        data.id,
        data.value,
        data.url,
        data.icon_url
    );
};
