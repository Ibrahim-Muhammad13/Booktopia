const express= require ("express");
const router=express.Router();
const controller=require("../controller/BookReveiwController")
// const { body, validationResult } = require('express-validator');
// const auth = require("../middlware/auth");


// router.get('/',(req, res) => {
//   controller.getting(res)
// });


router.get('/:id',(req, res) => {
//   const query=req.query
   const {id} =req.params
   // if (query.book){   
      controller.reviewsForOneBook (id,res)}
// }
);



 router.post('/',(req, res) => {  
    controller.creation(req.body,res)
});




// router.put( '/:id',(req, res) => {
//   const {id} =req.params
//   const data= req.body
//   // res.json(id)

//   controller.edit(id,data,res)
// });




router.delete('/:id',(req, res) => {
  const {id} =req.params
  controller.remove(id,res)
});


module.exports = router