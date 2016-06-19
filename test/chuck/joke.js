'use strict';

var assert = require('assert');
var Joke = require('../../lib/chuck/joke');

describe('Joke', function() {

    describe('Constructor', function() {
        it('Creates a new instance', function() {
            var joke = new Joke();
            assert(joke instanceof Joke);
        });

        it('Sets instance variables', function() {
            var joke = new Joke('id', 'value', 'sourceUrl', 'iconUrl');
            assert(joke.id == 'id');
            assert(joke.iconUrl == 'iconUrl');
            assert(joke.sourceUrl == 'sourceUrl');
            assert(joke.value == 'value');
        });
    });

    describe('getId', function() {
        it('Should return the joke`s id', function() {
            var joke = new Joke('qyiEeNq7QXWc2ODugw1gFw');
            assert(joke.getId() == 'qyiEeNq7QXWc2ODugw1gFw');
        });
    });

    describe('getIconUrl', function() {
        it('Should return the joke`s icon url', function() {
            var joke = new Joke(null, null, null, 'https://assets.chucknorris.host/img/avatar/chuck-norris.png');
            assert(joke.getIconUrl() == 'https://assets.chucknorris.host/img/avatar/chuck-norris.png');
        });
    });

    describe('getSourceUrl', function() {
        it('Should return the joke`s source url', function() {
            var joke = new Joke(null, null, 'http://api.chucknorris.io/jokes/qyiEeNq7QXWc2ODugw1gFw');
            assert(joke.getSourceUrl() == 'http://api.chucknorris.io/jokes/qyiEeNq7QXWc2ODugw1gFw');
        });
    });

    describe('getValue', function() {
        it('Should return the joke`s value', function() {
            var joke = new Joke(null, 'Chuck Norris can watch videos on Instagram!', null, null);
            assert(joke.getValue() == 'Chuck Norris can watch videos on Instagram!');
        });
    });

});
