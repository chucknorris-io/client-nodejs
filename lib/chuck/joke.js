'use strict';

function Joke(id, value, sourceUrl, iconUrl) {
    if (!(this instanceof Joke)) {
        return new Joke()
    }

    this.id = id;
    this.value = value;
    this.sourceUrl = sourceUrl;
    this.iconUrl = iconUrl;
}

Joke.prototype.getId = function() {
    return this.id;
}

Joke.prototype.getIconUrl = function() {
    return this.iconUrl;
}

Joke.prototype.getSourceUrl = function() {
    return this.sourceUrl;
}

Joke.prototype.getValue = function() {
    return this.value;
}

module.exports = Joke;
