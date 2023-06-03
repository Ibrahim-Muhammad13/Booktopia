const express= require ("express");
require("dotenv").config();
const router=express.Router();
const controller=require("../controller/userController")
const { body, validationResult } = require('express-validator');
// const auth = require("../middlware/auth");
// const bcrypt= require ("bcrypt");
// const jwt=require("jsonwebtoken");


router.get('/',(req, res) => {
  controller.getting(res)
});

router.get('/:id',(req, res) => {
  const {id} =req.params
  controller.gettingbyId (id,res)
});

   
 router.post('/',[
  body('email',"this is not email").isEmail(),
  body('password' ,'this length leen 8 ').isLength({ min: 8 }),
  body('fullname','this length  less than 8 ').isLength({ min: 8 }),
],(req, res) => {  
const errors=validationResult(req);
  if(errors.isEmpty()){
    controller.creation(req.body,res)
  }
  else{
    return res.json(errors) 
  }
});


router.put( '/:id',
[
  body('email',"this is not email").isEmail(),
  body('password').isLength({ min: 4 }),
  body('fullname','this length  less than 8 ').isLength({ min: 4 }),

],(req, res) => {
const errors=validationResult(req);
  if(errors.isEmpty()){
  const {id} =req.params
  const data= req.body
  controller.edit(id,data,res)
    }
    else{
      return res.json(errors) 
    }
  
});


router.delete('/:id',(req, res) => {
  const {id} =req.params
  controller.remove(id,res)
});



router.delete('/', (req, res) => {// to test only

});



module.exports = router