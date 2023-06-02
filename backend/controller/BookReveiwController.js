const review = require("../models/BookReveiw");// for database


async function creation (data, res){
  try {
    const respons=  await review.create(data)
    res.json(respons )
    } catch (e) {
      res.status(500).json(e)
  }}


  
async function getting (res){
  // try {
  //   const respons=  await user.find()    
  //   res.json(respons )
  // } catch (e) {
  //   res.status(500).json(e)
  // }
}




async function reviewsForOneBook(id,res){
    try {
      const respons=  await review.find({bookid:id}).populate({path:"UserId"});    
      res.json(respons)
    } catch (e) {
      res.status(500).json(e)
      }
    }


async function edit (id,data,res){
  // try {

  //    const respons=  await user.findByIdAndUpdate(id,data)    
  //   res.json(respons)
  //   // res.json("respons")
  //   } catch (e){
  //   res.status(500).json(e)
  // }
}


async function remove (id,res){
//   try {
//     await   user.findByIdAndRemove(id)    
//     res.status(201).json("come with delete method by id ")
//     } catch (e) {
//     res.status(500).json(e)
// }
}

      module.exports={
        creation,getting,remove,edit,reviewsForOneBook
        // ,gettingbyid,edit ,remove
            // add,edit,remove,parse2 ,checked,show
        }