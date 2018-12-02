const mongoose = require('mongoose')
const connection = require('../config/db')

const animeSchema = mongoose.Schema({
    Name: String,
    Description: String,
    ImgPath: String,
    Status: String
})

const Anime = connection.model('Anime', animeSchema)

module.exports = Anime