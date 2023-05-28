const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user')
const { github, google } = require('./config')

passport.use(new GoogleStrategy({
    clientID: google.clientID,
    clientSecret:google.clientSecret,
    callbackURL: "/auth/google/coolback"
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