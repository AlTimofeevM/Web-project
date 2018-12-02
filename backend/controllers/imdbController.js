const imdb  = require('imdb-api')


exports.findByName = function (name) {
    return imdb.get({name: name}, {apiKey: '94de8488', timeout: 30000}).then(console.log).catch(console.log);
}