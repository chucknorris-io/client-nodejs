'use strict';

const assert         = require('chai').assert,
      Chuck          = require('../src/Client'),
      Joke           = require('../src/Entity/Joke'),
      JokeCollection = require('../src/Entity/JokeCollection'),
      pkg            = require('../package.json'),
      util           = require('util');

describe(util.format('%s/Client', pkg.name), function () {

    describe('#Constructor', function() {
        it('Creates a new instance', function() {
            assert.instanceOf(new Chuck(), Chuck);
        });
    });

    describe('#getClientVersion', function() {
        it('should return the chucknorris api client version', function() {
            const client = new Chuck();

            assert.equal(client.getClientVersion(), pkg.version);
        });
    });

    describe('#getJokeCategories', function() {
        it('Should return a list of available categories', function(done) {
            const client   = new Chuck(),
                  response = client.getJokeCategories();

            response.then(function (response) {
                assert.isArray(response);
                done();
            });
        });
    });

    describe('#getRandomJoke', function() {
        it('Should return a random joke', function(done) {
            const client   = new Chuck(),
                  response = client.getRandomJoke();

            response.then(function (response) {
                assert.instanceOf(response, Joke);
                done();
            });
        });

        it('Should return a random joke from the given category', function(done) {
            const client   = new Chuck(),
                  response = client.getRandomJoke('dev');

            response.then(function (response) {
                assert.isTrue(-1 !== response.getCategories().indexOf('dev'));
                done();
            });
        });
    });

    describe('#search', function() {
        it('Should return a collection of joke', function(done) {
            const client   = new Chuck(),
                  response = client.search('Charlie Sheen');

            response.then(function (response) {
                assert.instanceOf(response, JokeCollection);
                done();
            });
        });
    });

});
