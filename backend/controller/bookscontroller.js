const books = require("../models/books");// for database
// const author = require("../models/author");
// const category = require("../models/category");


async function creation (data, res){
  try {
    const respons=  await books.create(data)
    res.json(respons )
  } catch (e) {
    res.status(500).json(e)
  }}
  
async function getting (req,res){
  const q =req.query
  // console.log(q)
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 3; 
    const respons=  await books.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("authorId").populate("categoryId"); 
    
    const booksCount = respons.length;
    const count = await books.countDocuments();
    res.status(200).json({currentPage:page,count:booksCount,totalPages: Math.ceil(count / limit),books:respons})
  } catch (e) {
    res.status(500).json(e.message)
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
    const respons=  await books.find({_id:id}).populate("authorId")
    .populate("categoryId");  
    res.status(201).json(respons )
  } catch (e) {
    res.status(500).json("error")
    }}


    async function gettingbyID (id,res){

      try {
        const respons=  await books.find({_id:id})   
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
   const respons=  await books.findByIdAndUpdate(id.id ,data)  
    res.json(respons )
    } catch (e) {
    res.json(e)
  }}


async function remove (id,res){
  try {
    await   books.findByIdAndRemove(id)    
    res.status(201).json("come with delete method by id ")
    } catch (e) {
    res.status(500).json("error")
}}

module.exports={
  creation,getting,gettingbyId,remove,edit,getBooksByCatId,getBookByAuthorId,search,gettingbyID
  }