const db = require('./dbController')



module.exports.getUser = async function(req,res){
    let username = req.user.name.givenName + ' ' + req.user.name.familyName
    let img = req.user.picture
    let user = await db.findUserByToken(req.user.id)
    let films = []
    for(film of user.Film){
        let Film  = await db.findFilmById(film)
        films.push({Title : Film.Name, Img : Film.Img})
    }
    res.send({Username : username, Img : img,Time : user.Time, Films : films})
}

module.exports.addFilm = async function(req,res){
    let Film = JSON.parse(req.body.Film)
    if(!(await db.isFilm(req.user.id,Film.Title))){
    let Result = await db.createFilm({Name: Film.Title,Img : Film.Img,  Status : 'Смотрел'})
    let time = Number(Film.Time.slice(0,-3))
    await db.setTime(req.user.id, time)
    await db.addFilm(req.user.id, Result._id)
    }else{
        console.log("Такой фильм уже добавлен")
    }
    res.redirect('/')
}