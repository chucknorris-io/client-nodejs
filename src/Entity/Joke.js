'use strict';

/**
 *
 * @constructor
 * @param {Array}  categories
 * @param {String} iconUrl
 * @param {String} id
 * @param {String} sourceUrl
 * @param {String} value
 */
function Joke(categories, iconUrl, id, sourceUrl, value) {
    if (! (this instanceof Joke)) {
        return new Joke()
    }

    this.categories = categories ? categories : [];
    this.iconUrl    = iconUrl ? iconUrl: null;
    this.id         = id ? id : null;
    this.sourceUrl  = sourceUrl ? sourceUrl : null;
    this.value      = value ? value : null;
}

/**
 * Get joke categories
 * @return {Array}
 */
Joke.prototype.getCategories = function() {
    return this.categories;
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
