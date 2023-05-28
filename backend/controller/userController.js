const user = require("../models/user");// for database
// const auther = require("../models/author");// for database

const { response } = require("express")



async function creation (data, res){
  try {
    const respons=  await user.create(data)
    res.status(201).json("create accout seccessful "+respons )
    } catch (e) {
      res.status(500).json(e)
  }}



async function getting (res){
  try {
    const respons=  await user.find()    
    res.status(201).json(respons )
  } catch (e) {
    res.status(500).json(e)
  }}



async function gettingbyId (id,res){
  try {
    const respons=  await user.find({_id:id})   ;    
    res.status(201).json("come with get one id method by id "+respons )
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