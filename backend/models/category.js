const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const category = new mongoose.Schema(
  {
    _id: {type: Number},
    cat_Name: {
      type: String,
      required: [true, 'Must enter a category name'],
      minLength: [4, 'category name should be more than 8 characters'],
      maxLength: [20, 'category name should be less than 20 characters'],
    }
  },
  { _id: false }
);
category.plugin(AutoIncrement,{inc_amount:1});
const categoryModel = mongoose.model('category', category);

module.exports = categoryModel;