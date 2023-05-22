const mongoose = require('mongoose');

const auther = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Must enter a first name'],
    minLength: [8,"min lengh is 8" ],
    maxLength: [20,"maximm lengh is 20" ],
  },

  LastName: {
    type: String,
    required: [true, 'Must enter a last name'],
    minLength: [8,"min lengh is 8" ],
    maxLength: [20,"maximm lengh is 20" ],
  },
  birthDate: {
    type: Date,
    required: [true, 'Must enter a last name'],

  },
  image: {
    type: String,
    required: [true, 'Must enter a image'],

  },
});

const autherModel = mongoose.model('auther', auther);

module.exports = autherModel;



