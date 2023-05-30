const books = require("../models/books");// for database
const author = require("../models/author");
const category = require("../models/category");
async function creation (data, res){
  try {
    const respons=  await books.create(data)
    res.json(respons )
  } catch (e) {
    res.status(500).json(e)
  }}

async function getting (res){
  try {
    const respons=  await books.find().populate("authorId").populate("categoryId");    
    res.status(201).json(respons)
  } catch (e) {
    res.status(500).json("error")
  }}



async function search (searchTerm,res){
  
  try {
    const totalbooks = await books.find()
    .populate("authorId")
    .populate("categoryId");

  const respons = [];

  await totalbooks.map(async (book) => {
        if (
          book.name.includes(searchTerm) ||
          book.authorId.firstName.includes(searchTerm) ||
          book.categoryId.cat_Name.includes(searchTerm)
        ) {
          respons.push(book);
        }
      })

      res.status(200).json(respons);
      

  } catch (e) {
    res.status(500).json(e)
}}
  
async function gettingbyId (id,res){

  try {
    const respons=  await books.find({_id:id})   ;    
    res.status(201).json(respons )
  } catch (e) {
    res.status(500).json("error")
    }}

async function getBooksByCatId (id,res){
  try {
    const respons=  await books.find({categoryId:id});    
    res.status(201).json(respons )
  } catch (e) {
    res.status(500).json("error")
}}
    
async function getBookByAuthorId (id,res){
  try {
    const respons=  await books.find({authorId:id});    
    res.status(201).json(respons )
  } catch (e) {
    res.status(500).json("error")
}}

    async function edit (id,data,res){
  try {
   const respons=  await books.findByIdAndUpdate(id,data)    
    res.status(201).json(respons )
    } catch (e) {
    res.status(500).json("error")
  }}


async function remove (id,res){
  try {
    await   books.findByIdAndRemove(id)    
    res.status(201).json("come with delete method by id ")
    } catch (e) {
    res.status(500).json("error")
}}

module.exports={
  creation,getting,gettingbyId,remove,edit,getBooksByCatId,getBookByAuthorId,search
  // ,gettingbyid,edit ,remove
      // add,edit,remove,parse2 ,checked,show
  }