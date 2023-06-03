const Category = require('../models/category');

async function getAllCategories(req, res) {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 3; 
        const respons=  await Category.find()
        .skip((page - 1) * limit)
        .limit(limit)
        const catCount = respons.length;
        const count = await Category.countDocuments();
        res.status(200).json({currentPage:page,count:catCount,totalPages: Math.ceil(count / limit),categories:respons})
      } catch (e) {
        res.status(500).json(e.message)
      }
}

function createCategory(req, res) {
    Category.create({ cat_Name: req.body.cat_Name})
        .then(function(category) {
            res.status(201).json({category});
        })
        .catch(function(err) {
            if (err.name === 'ValidationError') {
                console.error(Object.values(err.errors).map(val => val.message));
            }
            res.json(err.message);
        });
}

function updateCategory(req, res) {
    Category.updateOne({ _id: req.params.id }, { cat_Name: req.body.cat_Name })
    .then(function(category){
        res.json({category});
    })
    .catch(function(err){
        res.json(err.message);
    })
}

function deleteCategory(req, res) {
    Category.deleteOne({ _id: req.params.id })
    .then(function(category){
        res.json({category});
    })
    .catch(function(err){
        res.json(err.message);
    })
}

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
}