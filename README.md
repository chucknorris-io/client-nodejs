[![Build Status](https://travis-ci.org/chucknorris-io/client-nodejs.svg?branch=master)](https://travis-ci.org/chucknorris-io/client-nodejs)

# Official chucknorris.io api client for node.js

[chucknorris.io](https://api.chucknorris.io) is a free JSON API for hand curated Chuck Norris facts.

Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet
phenomenon and as a result have become widespread in popular culture. The 'facts' are normally absurd hyperbolic claims
about Norris' toughness, attitude, virility, sophistication, and masculinity.

Chuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized
versions mentioning country-specific advertisements and other Internet phenomena. Allusions are also sometimes made to
his use of roundhouse kicks to perform seemingly any task, his large amount of body hair with specific regard to his
beard, and his role in the action television series Walker, Texas Ranger.

## Installation

`npm install chucknorris-io`

## Usage

```javascript
const Chuck  = require('chucknorris-io'),
      client = new Chuck();

// Retrieve a random chuck joke
client.getRandomJoke().then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

// Retrieve a random chuck joke from the given category
client.getRandomJoke('dev').then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

// Retrieve a list of available joke categories
client.getJokeCategories().then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});

// Free text search
client.search(searchTerm).then(function (response) {
    // do stuff here
}).catch(function (err) {
    // handle error
});
```

## License

This distribution is covered by the **GNU GENERAL PUBLIC LICENSE**, Version 3, 29 June 2007.

## Support & Contact

Having trouble with this repository? Check out the documentation at the repository's site or contact m@matchilling.com and we’ll help you sort it out.

Happy Coding

:v:
