'use strict';

/**
 *
 * @constructor
 * @param {Joke[]} jokes
 * @param {Integer} count
 */
function JokeCollection(jokes, count) {
    if (! (this instanceof JokeCollection)) {
        return new JokeCollection();
    }

    this.count = count;
    this.items = jokes;
}

/**
 * Get count
 * @return {Integer}
 */
JokeCollection.prototype.getCount = function () {
    return this.count;
};

/**
 * Get items
 * @return {Joke}
 */
JokeCollection.prototype.getItems = function () {
    return this.items;
};

module.exports = JokeCollection;
