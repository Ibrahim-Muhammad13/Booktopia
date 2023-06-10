const mongoose = require('mongoose');
const books = new mongoose.Schema({
name: {
    type: String,
    minLength: [3],
  },
  rate:{
    type: Number,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'auther',
  },
  categoryId: {
    type: Number,
    ref: 'category',
  },
  image: {
    type: String,
},
description:{
  type: String,
}
});

const booksModel = mongoose.model('books', books);

module.exports = booksModel;

