const user = require("../models/UserBooks");// for database
const Auther = require("../models/author");// for database
async function creation (data, res){
  try {
    const exist = await user.findOne({ bookid:data.bookid,UserId:data.UserId });
    // console.log(exist);
    if (exist) {return res.json("this book is found in user profile");}
  else{
const respons=  await user.create(data)
    res.json(respons )
  }
    
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
    const respons=  await user.find({UserId:id}).populate({path:"bookid",populate:{path: "authorId"}});    
    res.json(respons)
  } catch (e) {
    res.status(500).json(e)
    }}

async function gettingbyquery(id,stutes, res){
    try {
      const respons=  await user.find({UserId:id,status:stutes}).populate({path:"bookid",populate:{path: "authorId"}});    
      res.json(respons)
    } catch (e) {
      res.status(500).json(e)
      }
    }

async function getAllRating (id,res){
  try {
    const respons=  await user.find({bookid:id}).select("rate");    
    res.json(respons)
  } catch (e) {
    res.status(500).json(e)
}}
async function edit (id,data,res){
  try {

     const respons=  await user.findByIdAndUpdate(id,data)    
    res.json(respons)
    // res.json("respons")
    } catch (e){
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
  creation,getting,gettingbyId,remove,edit,gettingbyquery,getAllRating
}