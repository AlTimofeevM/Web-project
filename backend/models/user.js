const mongoose = require('mongoose')
const connection = require('../config/db')

const userSchema = mongoose.Schema({
    Token: String,
    Username: String,
    Role: String,
    Anime: [String]
})

const User = connection.model('User', userSchema)

module.exports = User