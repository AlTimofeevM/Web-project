const imdb  = require('imdb-api')


let findByName = async function (name) {
    return await imdb.get({name: name}, {apiKey: '94de8488'}).catch(console.log)
}

module.exports.showFilm = async function(req,res){
    let name = req.url.slice(6).replace('_', ' ')
    let Movie = await findByName(name)
    if(Movie === undefined){
        Movie = {Err : true}
    }
    res.status(200).send(Movie)
}   