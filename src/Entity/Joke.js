'use strict';

/**
 *
 * @constructor
 * @param {String} id
 * @param {String} value
 * @param {String} sourceUrl
 * @param {String} iconUrl
 */
function Joke(id, value, sourceUrl, iconUrl) {
    if (! (this instanceof Joke)) {
        return new Joke()
    }

    this.id        = id;
    this.value     = value;
    this.sourceUrl = sourceUrl;
    this.iconUrl   = iconUrl;
}

/**
 * Get joke id
 * @return {String}
 */
Joke.prototype.getId = function() {
    return this.id;
}

/**
 * Get icon url
 * @return {String}
 */
Joke.prototype.getIconUrl = function() {
    return this.iconUrl;
}

/**
 * Get source url
 * @return {String}
 */
Joke.prototype.getSourceUrl = function() {
    return this.sourceUrl;
}

/**
 * Get value
 * @return {String}
 */
Joke.prototype.getValue = function() {
    return this.value;
}

module.exports = Joke;
