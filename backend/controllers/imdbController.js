const imdb  = require('imdb-api')
const db = require('./dbController')

let findByName = async function (name) {
    return await imdb.get({name: name}, {apiKey: '94de8488'}).catch(console.log)
}

module.exports.showFilm = async function(req,res){
    let name = req.url.slice(6).replace('_', ' ')
    let Movie = await findByName(name)
    if(Movie === undefined){
        Movie = {Err : true}
    }
    let isFilm = await db.isFilm(req.user.id,Movie.title)
    let Data = {Data: Movie, isFilm: isFilm}
    res.send(Data)
}

module.exports.search = function(req,res){
    let film = req.body.film.replace(' ', '_')
    res.redirect('/film/' + film)
}