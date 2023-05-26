const express= require ("express");
require("dotenv").config();
const { body, validationResult } = require('express-validator');
const bcrypt= require ("bcrypt");
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
      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({fullname,email,password: encryptedPassword,Type});
      res.status(201).json(user);
     }
  else{
    return res.json("sorry") 
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
    //  return res.json("done");

    if (user && (await bcrypt.compare(password, user.password))) {
    //  return res.json("done");

        Type=user.Type
      const token = jwt.sign(
        {Type, email },
        process.env.TOKEN_KEY
      );
       user.token = token;
     return res.json(user+user.token);
    }
    res.json("Invalid  no user found in data base ");
  }
//   else{ return res.json(errors) }

} catch (err) {
  console.log(err);
}
});


// router.get("/welcome", auth, (req, res) => {
// console.log(req.params)
//   res.status(200).send("Welcome 🙌 ");

// });

module.exports = router