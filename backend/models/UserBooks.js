const mongoose = require('mongoose');

const UserBooks = new mongoose.Schema({
bookid: {
type: mongoose.Schema.Types.ObjectId,
ref: 'books',

  },
status: {
    type: String,//read reading want to read
},
UserId: {
    type: String,
    ref: 'user',
  },
  rate:{
  type: Number,

  }
});

const UserboksModel = mongoose.model('UserBooks', UserBooks);

module.exports = UserboksModel;
