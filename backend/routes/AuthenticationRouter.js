const express= require ("express");
require("dotenv").config();
const { body, validationResult } = require('express-validator');
const bcrypt= require ("bcrypt");
// const helper=require("../healper2.js")
const router=express.Router();
// const User = require("../model/studentModel");
const jwt=require("jsonwebtoken");



// Register
router.post("/new",[
  body('email',"this is not email").isEmail(),
  body('password' ,'this length leen 8 ').isLength({ min: 8 }),
  body('fullname','this length  less than 8 ').isLength({ min: 8 }),]
,async(req, res) => {
    try {
    const errors=validationResult(req);
     if(errors.isEmpty()){
    const { fullname, email, password ,Type} = req.body;    
    const oldUser = await User.findOne({ email });
      if (oldUser) {return res.status(409).send("User Already Exist. Please Login");}
      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({fullname,email,password: encryptedPassword,Type});
      res.status(201).json(user);
     }
  else{
    return res.json(errors) 
  }
  } 
    catch (err) {console.log(err);}

});


// Login
router.post("/", 
body('email',"this is not email").isEmail(),
body('password' ,'this length leen 8 ').isLength({ min: 8 }),
body('Type').notEmpty()
,async(req, res) => {
// our login logic goes here
try {
  const errors=validationResult(req);
  if(errors.isEmpty()){
    const { email, password ,Type} = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {Type, email },
        'shhhhh'
      );
      user.token = token;
     return res.status(200).json(user+user.token);
    }
    res.status(400).send("Invalid Credentials");
  }
  else{ return res.json(errors) }
} catch (err) {
  console.log(err);
}
});


const auth = require("../middlware/auth");
// const passport = require("passport");
//auth is sent type and email in request body



const passport=require('passport');
const Google =require('passport-google-oauth20').Strategy;
const keys=require('../keys');




// router.use(passport.initialize());
// router.use(passport.session());



// const GoogleStrategy = require('passport-google-oauth20');




passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // User.findById(id).then((user) => {
    user={
      "googleId": "32454579",
      "username": "dxgfchgvjbnm,s"
  }
      done(null, user);
  // });
});





passport.use(new Google({
  callbackURL:'/auth/google/cb'
  ,clientID:'879012351654-gclat1q65jpr0uunr9n5hckvi77vhqcp.apps.googleusercontent.com',
  // ,clientID:keys.Google.clientID,
  clientSecret:'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'
 },
 (accessToken, refreshToken, profile, done) => {
  // passport callback function
  console.log('passport callback function fired:');
  console.log(profile);
  user={
    "googleId": profile.id,
    "username": profile.displayName
}
  done(null,user);
})
);
// ()=>{}))


router.get("/google", passport.authenticate('google',
{
  scope:['profile']
}
));


router.get("/google/cb",passport.authenticate('google'),(req, res) => {
// console.log(req)

  res.status(200).send("Welcome 🙌 " );
});


router.get("/welcome", auth, (req, res) => {
// console.log(req.params)
  res.status(200).send("Welcome 🙌 ");

});

module.exports = router