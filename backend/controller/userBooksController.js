const user = require("../models/UserBooks");// for database
const Auther = require("../models/author");// for database
// const { response } = require("express")
async function creation (data, res){
  try {
    // res.json(data)

    const respons=  await user.create(data)
    res.json(respons )
    } catch (e) {
      res.status(500).json(e)
  }}



async function getting (res){
  try {
    const respons=  await user.find()    
    res.json(respons )
  } catch (e) {
    res.status(500).json(e)
  }}



async function gettingbyId (id,res){
  try {
    // const respons=  await user.find({UserId:id}).populate("bookid").populate("UserId")   ;    
    // auther_id=respons
    const respons=  await user.find({UserId:id}).populate({path:"bookid",populate:{path: "authorId"}});    
    // populate('author', 'name email')


    // .populate({
    //     path: 'bookid',
    //     select: 'title content',
    //     populate: {
    //       path: 'author',
    //       select: 'name email'
    //     }
    // const auther =  await Auther.find(id:}).populate("bookid").populate("UserId")   ;    
    // console.log(respons2)
    res.json(respons)
  } catch (e) {
    res.status(500).json("error")
    }}


async function edit (id,data,res){
  try {
     const respons=  await user.findByIdAndUpdate(id,data)    
    res.status(201).json("come with updata method by id "+respons )
    } catch (e) {
    res.status(500).json(e)
  }}


async function remove (id,res){
  try {
    await   user.findByIdAndRemove(id)    
    res.status(201).json("come with delete method by id ")
    } catch (e) {
    res.status(500).json(e)
}}

      module.exports={
        creation,getting,gettingbyId,remove,edit
        // ,gettingbyid,edit ,remove
            // add,edit,remove,parse2 ,checked,show
        }