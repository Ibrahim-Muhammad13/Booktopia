const express= require ("express");
require("dotenv").config();
const router=express.Router();
const controller=require("../controller/auther")
const uplaod =require("../upload")

router.get('/',(req, res) => {
  controller.getting(req,res)
});

router.get('/:id',(req, res) => {
  const {id} =req.params
  controller.gettingbyId (id,res)
});

router.post('/', uplaod.any(),(req, res) => { 
  let data =req.body
  controller.creation(data,res)
});

router.put( '/:id',uplaod.any(),
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
