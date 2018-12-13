const mongoose = require('mongoose')
const connection = require('../config/db')

const filmSchema = mongoose.Schema({
    Name: String,
    Img: String,
    Status: String
})

const Film = connection.model('Film', filmSchema)

module.exports = Film