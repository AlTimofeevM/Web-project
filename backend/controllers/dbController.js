const UserModel = require('../models/user.js')
const AnimeModel = require('../models/anime.js')


exports.findUserById = function (id) {
    return UserModel.findById(id)
  }


exports.findAnimeById = function(id){
    return AnimeModel.findById(id)
}