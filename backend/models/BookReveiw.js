const mongoose = require('mongoose');

const BookReveiw = new mongoose.Schema({
bookid: {
type: mongoose.Schema.Types.ObjectId,
ref: 'books',
  },
UserId: {
    type: String,
    ref: 'user',
  },
review: {
    type: String,
}

});

const BookReveiwModel = mongoose.model('BookReveiw', BookReveiw);

module.exports = BookReveiwModel;
