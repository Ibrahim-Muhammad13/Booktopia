
const express= require ("express");
require("dotenv").config();
const { body, validationResult } = require('express-validator');
const passport = require('passport')

// // const bcrypt= require ("bcrypt");
// // const helper=require("../healper2.js")
const router=express.Router();
// // const User = require("../model/studentModel");
// const jwt=require("jsonwebtoken");

// // const express= require ("express");
// // require("dotenv").config();
// // const { body, validationResult } = require('express-validator');
// // // const bcrypt= require ("bcrypt");
// // // const helper=require("../healper2.js")
// // const router=express.Router();
// // const User = require("../model/studentModel");
// // const jwt=require("jsonwebtoken");

// // // Register
// // router.post("/new",[
// //   body('email',"this is not email").isEmail(),
// //   body('password' ,'this length leen 8 ').isLength({ min: 8 }),
// //   body('fullname','this length  less than 8 ').isLength({ min: 8 }),]
// // ,async(req, res) => {
// //     try {
// //     const errors=validationResult(req);
// //      if(errors.isEmpty()){
// //     const { fullname, email, password ,Type} = req.body;    
// //     const oldUser = await User.findOne({ email });
// //       if (oldUser) {return res.status(409).send("User Already Exist. Please Login");}
// //       encryptedPassword = await bcrypt.hash(password, 10);
// //       const user = await User.create({fullname,email,password: encryptedPassword,Type});
// //       res.status(201).json(user);
// //      }
// //   else{
// //     return res.json(errors) 
// //   }
// //   } 
// //     catch (err) {console.log(err);}

// // });


// // // Login
// // router.post("/", 
// // body('email',"this is not email").isEmail(),
// // body('password' ,'this length leen 8 ').isLength({ min: 8 }),
// // body('Type').notEmpty()
// // ,async(req, res) => {
// // // our login logic goes here
// // try {
// //   const errors=validationResult(req);
// //   if(errors.isEmpty()){
// //     const { email, password ,Type} = req.body;
// //     const user = await User.findOne({ email });
// //     if (user && (await bcrypt.compare(password, user.password))) {
// //       const token = jwt.sign(
// //         {Type, email },
// //         'shhhhh'
// //       );
// //       user.token = token;
// //      return res.status(200).json(user+user.token);
// //     }
// //     res.status(400).send("Invalid Credentials");
// //   }
// //   else{ return res.json(errors) }
// // } catch (err) {
// //   console.log(err);
// // }
// // });



// const auth = require("../middlware/auth");
// // const passport = require("passport");
// //auth is sent type and email in request body

// // const auth = require("../middlware/auth");
// // //auth is sent type and email in request body
// s





// router.get("/google/cb",passport.authenticate('google'),(req, res) => {
// // console.log(req)

//   res.status(200).send("Welcome 🙌 " );
// });



// // router.get("/welcome", auth, (req, res) => {
// //   res.status(200).send("Welcome 🙌 ");
// // });







































// auth with github
router.get('/github', passport.authenticate('github', {
    scope: ['user']
  }))

  router.get('/github/cb', passport.authenticate('github'), (req,res) =>{
    console.log( req.user)
    res.json(req.user)

  })

  router.get('/facebook', passport.authenticate('facebook'))


router.get('/google/cb', passport.authenticate('facebook'), (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.json(req.user)
  
})
  
router.get('/google', passport.authenticate('google',{
  
    scope: ['profile']
  }))


//   router.get('/google', (req, res) => {
    // res.json("req.use")
//   })

router.get("/google/coolback",passport.authenticate('google'),(req, res) => {
// console.log(req)
  res.json(req.user);
});


module.exports = router
