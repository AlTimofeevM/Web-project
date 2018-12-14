const UserModel = require('../models/user.js')
const FilmModel = require('../models/film.js')


exports.findUserById = function (id) {
    return UserModel.findById(id)
  }

exports.findFilmById = function(id){
    return FilmModel.findById(id)
}

exports.isUser = function(token){
  return UserModel.findOne({Token: token},function(err, user){
      if(err)
        return res.send('Error')
        
      if(!user){
        return false
      }
        
      return true
    })
}

exports.createUser = function(User){
  return UserModel.create(User)
}

exports.createFilm = function(Film){
  return FilmModel.create(Film)
}

exports.addFilm = function(userToken, filmId){
  return UserModel.findOneAndUpdate({ Token: userToken }, { $push: { Film : filmId } })
}

exports.setTime = function(userToken, time){
  return UserModel.findOneAndUpdate({ Token: userToken }, { $inc: { Time : time } })
  }

exports.findUserByToken = function(token){
  return UserModel.findOne({Token:token})
}

exports.isFilm = async function(token,film){
  let user = await UserModel.findOne({Token:token})
  for (let j of user.Film){
    let Film = await FilmModel.findById(j)
    if(Film.Name === film){
      return true
    }
  }
  return false
}

exports.deleteFilm = function(id){
  return FilmModel.findOneAndDelete({_id: id})
}

exports.setNewFilmList = function(userToken,films,time){
  return UserModel.findOneAndUpdate({ Token: userToken }, { $set: { Film : films } , $inc: {Time : time}})
}