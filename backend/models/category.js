const mongoose = require('mongoose');

const category = new mongoose.Schema(
  {
    
    cat_Name: {
      type: String,
      required: [true, 'Must enter a category name'],
      minLength: [4, 'category name should be more than 4 characters'],
      maxLength: [20, 'category name should be less than 20 characters'],
    }
  }
  
);
// category.plugin(AutoIncrement,{inc_amount:1});
const categoryModel = mongoose.model('category', category);

module.exports = categoryModel;