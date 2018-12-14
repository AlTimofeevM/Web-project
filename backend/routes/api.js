const express = require('express')
const router = express.Router()
const imdbController = require('../controllers/imdbController.js')
const userController = require('../controllers/userController.js')

router.get('/film=*', imdbController.showFilm)

router.get('/userinfo', userController.getUser)

router.post('/search', imdbController.search)

router.post('/addFilm', userController.addFilm)

router.post('/deleteFilm', userController.deleteFilm)

module.exports = router