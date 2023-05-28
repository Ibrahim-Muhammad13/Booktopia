const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/user')
const { github, facebook } = require('./config')

passport.use(new FacebookStrategy({
    clientID: facebook.clientID,
    clientSecret:facebook.clientSecret,
    callbackURL: "/auth/google/cb"
}

,(accessToken, refreshToken, profile, done) =>{
  // check first if user already exists in our DB.
  User.findOne({password: profile.id}).then((currentUser) =>{
    if (currentUser) {
    return  done(null, currentUser)
    } else 
    {
      const user = new User({
        fullname: profile._json.name,
        password: profile.id,
        email: profile._json.name+ profile.id+"@gmail.com",
        Type:false
      })
      user.save().then(() => console.log("user saved to DB."))
    return  done(null, user)
    }
  })
// console.log(profile)
}))



passport.serializeUser((user, done) =>{
  done(null, user.id)
})

passport.deserializeUser((id, done) =>{
  console.log(id)
  User.findOne({id}).then((user) =>{
    done(null, id)
  })
})