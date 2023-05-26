const express= require ("express");
require("dotenv").config();
const router=express.Router();
const controller=require("../controller/bookscontroller")
// const bcrypt= require ("bcrypt");
const jwt=require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const auth = require("../middlware/auth");

router.get('/',(req, res) => {
  controller.getting(res)

});

router.get('/:id',(req, res) => {
  const {id} =req.params
  controller.gettingbyId (id,res)

});


//Title mainSpeaker speakers  students


router.post('/',
[
  body('name',"plz must lenth =3 or more").isLength({ min: 3 }),  
],(req, res) => {
const errors = validationResult(req);
  if(errors.isEmpty()){
    controller.creation(req.body,res)
    }
      else{
      return res.json(errors) 
    }
});

router.put( '/:id',
[
  body('name',"plz must lenth =3 or more").isLength({ min: 3 }),
],
(req, res) => {
  const errors = validationResult(req);
  if(errors.isEmpty()){
    const {id} =req.params
    const data= req.body
    controller.edit(id,data,res)
    }
      else{
      return res.json(errors) 
    }
 
});
router.delete('/:id', auth,(req, res) => {
  const {id} =req.params
  controller.remove(id,res)
});
router.delete('/', (req, res) => {// to test only
  res.send("delet all event");
});










// const auth = require("../middlware/auth");

// router.get("/welcome", auth, (req, res) => {
  // res.status(200).send("Welcome 🙌 ");
// });

module.exports = router