const UserModel = require('../models/user.js')
const FilmModel = require('../models/anime.js')


exports.findUserById = function (id) {
    return UserModel.findById(id)
  }


exports.findAnimeById = function(id){
    return AnimeModel.findById(id)
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

exports.addFilm = function(userToken, film){
  let session = null
  
  return UserModel.findOneAndUpdate({ Token: req.user.id }, { $push: { Film : filmId } })
}