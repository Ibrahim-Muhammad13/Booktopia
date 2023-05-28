const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const user = new mongoose.Schema(
  {
    id: {
      type: Number,
    },

    fullname: {
      type: String,
      required: [true, 'Must enter a full name'],
      minLength: [6, 'full name should be more than 3 characters'],
      maxLength: [20, 'Full name should be less than 60 characters'],
    },
    email: {
      type: String,
      lowercase: true,
      required:[true, 'email address is required'],
      unique: [true,"must be unique"]

    },

    password: {
      type: String,
      minLength: [8, 'Password must be more than 6 characters'],
    },
    Type:{
    type:Boolean 
    }
  },
  // { _id: false }
);
user.plugin(AutoIncrement,{inc_amount:1,inc_field: 'id'});
const userModel = mongoose.model('user', user);

module.exports = userModel;


