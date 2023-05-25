const express= require ("express");
require("dotenv").config();
const router=express.Router();
const controller=require("../controller/auther")
const { body, validationResult } = require('express-validator');
const multer=require("multer");
const storage = multer.diskStorage({
   destination: function (req, file, callback) {
       callback(null, __dirname + '/../images');
   },
   filename: function (req, file, callback) {
      // console.log(file.originalname); // User-defined filename is available      
      const filename = file.originalname; // Create custom filename (crypto.randomUUID available in Node 19.0.0+ only)
      req.body.image='http://localhost:3000/images/'+filename
      console.log(req.body)
      callback(null, filename);
   }
 })

 
const upload = multer({ 
   storage: storage,
   limits: {
      fileSize: 1048576 // Defined in bytes (1 Mb)
   }, 
})

// const auth = require("../middlware/auth");
router.get('/',(req, res) => {
  controller.getting(res)
  // res.send("done")
});

router.get('/:id',(req, res) => {
  const {id} =req.params
  controller.gettingbyId (id,res)

});

router.post('/', upload.any(),(req, res) => { 
  // req.body.image=req.files[0].filename
  // res.json(req.body)
  let data =req.body

  controller.creation(data,res)
  // console.log(req.files);
});

router.put( '/:id',upload.any(),
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
