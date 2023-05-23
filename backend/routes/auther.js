const express= require ("express");
require("dotenv").config();
const router=express.Router();
const controller=require("../controller/auther")
const { body, validationResult } = require('express-validator');

// const auth = require("../middlware/auth");
router.get('/',(req, res) => {
  controller.getting(res)
  // res.send("done")
});

router.get('/:id',(req, res) => {
  const {id} =req.params
  controller.gettingbyId (id,res)

});

router.post('/',(req, res) => { 
  controller.creation(req.body,res)
});

router.put( '/:id',
(req, res) => {
  const {id} =req.params
  const data= req.body
  controller.edit(id,data,res)
});
router.delete('/:id', (req, res) => {
  const {id} =req.params
  controller.remove(id,res)
});

module.exports = router
