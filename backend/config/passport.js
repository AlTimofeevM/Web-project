const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

var strategy = new Auth0Strategy(
    {
      domain: 'auction.eu.auth0.com',
      clientID: 'glB7UNvEJZawyihqE67f0jEbFjH1lsai',
      clientSecret: 'Vl0a06A6QMvABSLOHyRTz0Gu1TcUqFL7ef4PaYmhQpzj0wFurUldv92xfPJz9EbQ',
      callbackURL:
        process.env.AUTH0_CALLBACK_URL || 'http://localhost:8080/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
      return done(null, profile)
    }
  )

  passport.use(strategy)

  passport.serializeUser(function (user, done) {
    console.log('Serializing', user)
    done(null, user)
  })
  
  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

module.exports = passport