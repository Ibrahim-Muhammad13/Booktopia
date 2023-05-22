const Category = require('../models/category');

function getAllCategories(req, res) {
    Category.find({}).then(function(categories,err) {
        if (err) {
          res.json(err);
        }
        res.json({
            categories
        }) 
    });
}

function createCategory(req, res) {
    Category.create({ cat_Name: req.body.cat_Name})
        .then(function(category) {
            res.json({category});
        })
        .catch(function(err) {
            if (err.name === 'ValidationError') {
                console.error(Object.values(err.errors).map(val => val.message));
            }
            res.json(err.message);
        });
}

module.exports = {
    getAllCategories,
    createCategory
}