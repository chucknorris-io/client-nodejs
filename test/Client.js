'use strict';

const assert = require('chai').assert,
      Chuck  = require('../src/Client'),
      Joke   = require('../src/Entity/Joke'),
      pkg    = require('../package.json'),
      util   = require('util');

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

    describe('#getRandomJoke', function() {
        it('Should return a random joke', function(done) {
            const client   = new Chuck(),
                  response = client.getRandomJoke();

            response.then(function (response) {
                assert.instanceOf(response, Joke);
                done();
            }).catch(function (err) {
                done();
            })
        });
    });

});
