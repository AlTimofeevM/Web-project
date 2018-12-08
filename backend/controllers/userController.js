const db = require('./dbController')



module.exports.getUser= function(req,res){
    let username = req.user.name.givenName + ' ' + req.user.name.familyName
    let img = req.user.picture
    res.send({Username : username, Img : img})
}

module.exports.addFilm = async function(req,res){
    let Film = JSON.parse(req.body.Film)
    let Result = await db.createFilm({name : Film.Title, status : 'Смотрел'})
    let time = Number(Film.Time.slice(0,-3))
    await db.setTime(req.user.id, time)
    await db.addFilm(req.user.id, Result._id)
    await res.redirect('/user')
}