const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const user = new mongoose.Schema(
  {
    _id: {type: Number},
    fullname: {
      type: String,
      required: [true, 'Must enter a full name'],
      minLength: [8, 'full name should be more than 8 characters'],
      maxLength: [20, 'Full name should be less than 20 characters'],
    },
    email: {
      type: String,
      required:[true, 'email address is required'],
      unique: [true,"must be unique"]
    },
    
    password: {
      type: String,
      minLength: [8, 'Password must be more than 8 characters'],
    },
    Type :{
      type:Boolean ,
      required:[true,"to define user or admin"],

    }

  },
  { _id: false }
);
user.plugin(AutoIncrement,{inc_amount:1});
const UserModel = mongoose.model('user', user);

module.exports = UserModel;