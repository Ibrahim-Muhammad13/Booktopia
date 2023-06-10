const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const User = require('../models/user')
const { github } = require('./config')

passport.use(new GithubStrategy({
    clientID: github.clientID,
    clientSecret: github.clientSecret,
    callbackURL: "/auth/github/cb"
}


,(accessToken, refreshToken, profile, done) =>{
  // check first if user already exists in our DB.
  User.findOne({password: profile.id}).then((currentUser) =>{
    if (currentUser) {
    return  done(null, currentUser)
    } else 
    {
      const user = new User({
        fullname: profile.username,
        password: profile.id,
        email: profile._json.url,
        Type:false
      })
      user.save().then(() => console.log("user saved to DB."))
    return  done(null, user)
    }
  })
}))



passport.serializeUser((user, done) =>{
  // console.log(user)
  done(null, user.id)
})

passport.deserializeUser((id, done) =>{
  // const oldUser = await User.findOne({ email });
  console.log(id)
  User.findOne({id}).then((user) =>{
    done(null, id)
  })
})