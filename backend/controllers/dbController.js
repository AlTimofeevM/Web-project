const UserModel = require('../models/user.js')
const AnimeModel = require('../models/anime.js')


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