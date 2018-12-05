const mongoose = require('mongoose')
const connection = require('../config/db')

const filmSchema = mongoose.Schema({
    Name: String,
    Status: String
})

const Film = connection.model('Film', filmSchema)

module.exports = Film