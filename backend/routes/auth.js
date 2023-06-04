const express= require ("express");
require("dotenv").config();
const { body, validationResult } = require('express-validator');
const passport = require('passport')
const router=express.Router();
const jwt=require("jsonwebtoken");
const  User=require("../models/user")
router.post("/register",[
  body('email',"this is not email").isEmail(),
  body('password' ,'this length leen 8 ').isLength({ min: 8 }),
  body('fullname','this length  less than 8 ').isLength({ min: 8 }),]
,async(req, res) => {
    try {        
    const errors=validationResult(req);
     if(errors.isEmpty()){
    const { fullname, email, password } = req.body;    
    const Type=false    
    const oldUser = await User.findOne({ email });
      if (oldUser) {return res.json("User Already Exist. Please Login");}
      const user = await User.create({fullname,email,password: password,Type});
      res.status(201).json(user);
     }
  else{
    return res.json(errors) 
  }
  } 
  catch (err) {console.log(err);}

});



// Login
router.post("/login", 
[body('email',"this is not email").isEmail(),
body('password' ,'this length leen 8 ').isLength({ min: 8 })]
,async(req, res) => {

try {
  const errors=validationResult(req);
  if(errors.isEmpty()){
    const { email, password} = req.body;
    const user = await User.findOne({ email });
    // console.log(user)
    if (user && password== user.password) {
      
        Type=user.Type
      const token = jwt.sign(
        {Type, email },
        process.env.TOKEN_KEY
      );
       user.token = token;
     return res.json({user:user,token:user.token});
    }
    res.json("Invalid data");
  }
   else{ return res.json(errors) }

} catch (err) {
  console.log(err);
}
});








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



router.get("/google/coolback",passport.authenticate('google'),(req, res) => {
res.json(req.user);
});


module.exports = router