'use strict';

const JokeCollection       = require('../Entity/JokeCollection'),
      JokeCollectionMapper = module.exports = {},
      JokeMapper           = require('../Mapper/Joke');

/**
 * Create an instance of JokeCollection from an api response object
 * @param  {Object} response
 * @throws {TypeError}
 * @throws {Error}
 * @return {JokeCollection}
 */
JokeCollectionMapper.fromApiResponse = function(response) {
    if ('object' !== typeof response) {
        throw new TypeError('Argument "response" must be of type object.');
    }

    if (! response.hasOwnProperty('body')) {
        throw new Error('Response object must have a property "body".');
    }

    return JokeCollectionMapper.fromJson(response.body);
};

/**
 * Create an instance of JokeCollection from json string or object
 * @param  {Object|String} json
 * @throws {TypeError}
 * @return {JokeCollection}
 */
JokeCollectionMapper.fromJson = function(json) {
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

    const jokes = data.result.map(function (item) {
        return JokeMapper.fromJson(item);
    });

    return new JokeCollection(jokes, data.total);
};
