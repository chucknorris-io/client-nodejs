'use strict';

const assert = require('chai').assert,
      Joke   = require('../../src/Entity/Joke'),
      pkg    = require('../../package.json'),
      util   = require('util');

describe(util.format('%s/Entity/Joke', pkg.name), function () {

    describe('#Constructor', function() {
        it('Creates a new instance', function() {
            assert.instanceOf(new Joke(), Joke);
        });
    });

    describe('#getCategories', function() {
        it('Should return the joke`s category list', function() {
            const joke = new Joke('foo');
            assert.equal(joke.getCategories(), [ 'foo' ]);
        });
    });

    describe('#getIconUrl', function() {
        it('Should return the joke`s icon url', function() {
            const joke = new Joke(null, 'https://assets.chucknorris.host/img/avatar/chuck-norris.png');
            assert.equal(joke.getIconUrl(), 'https://assets.chucknorris.host/img/avatar/chuck-norris.png');
        });
    });

    describe('#getId', function() {
        it('Should return the joke`s id', function() {
            const joke = new Joke(null, null, 'qyiEeNq7QXWc2ODugw1gFw');
            assert.equal(joke.getId(), 'qyiEeNq7QXWc2ODugw1gFw');
        });
    });

    describe('#getSourceUrl', function() {
        it('Should return the joke`s source url', function() {
            const joke = new Joke(null, null, null, 'http://api.chucknorris.io/jokes/qyiEeNq7QXWc2ODugw1gFw');
            assert.equal(joke.getSourceUrl(), 'http://api.chucknorris.io/jokes/qyiEeNq7QXWc2ODugw1gFw');
        });
    });

    describe('#getValue', function() {
        it('Should return the joke`s value', function() {
            const joke = new Joke(null, null, null, null, 'Chuck Norris can watch videos on Instagram!', null, null);
            assert(joke.getValue(), 'Chuck Norris can watch videos on Instagram!');
        });
    });

});
