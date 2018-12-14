const express = require('express')
const router = express.Router()
const passport = require('passport')
const path = require('path')

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  }
  else {
    return res.status(200).redirect('/login')
  }
}

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
  }), function (req, res) {
    res.redirect('/')
  });
  
  // Perform the final stage of authentication and redirect to previously requested URL or '/user'
  router.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.redirect('/login') }
      req.logIn(user, function (err) {
        if (err) { return next(err) }
        const returnTo = req.session.returnTo
        delete req.session.returnTo
        res.redirect(returnTo || '/user')
      });
    })(req, res, next)
  })
  
  // Perform session logout and redirect to homepage
  router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  router.get('/user', auth , function (req, res, next) {
    res.status(200).sendFile('D:\\Web-project\\frontend\\user.html')
  })

  router.get('/',auth, function (req, res, next) {
    res.status(200).redirect('/user')
  })

  router.get('/film/*',auth,function(req,res){
    res.sendFile('D:\\Web-project\\frontend\\film.html')
  })

  router.get('*',function(req,res){
    res.send('404 error')
  })

  module.exports = router