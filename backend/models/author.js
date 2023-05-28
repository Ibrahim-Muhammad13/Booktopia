const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const auther = new mongoose.Schema({
  id_auther: {
    type: Number,
  },
  firstName: {
    type: String,
    required: [true, 'Must enter a first name'],
    minLength: [4,"min lengh is 4" ],
    maxLength: [20,"maximm lengh is 20" ],
  },

  LastName: {
    type: String,
    required: [true, 'Must enter a last name'],
    minLength: [4,"min lengh is 4" ],
    maxLength: [20,"maximm lengh is 20" ],
  },
  birthDate: {
    type: String,
    required: [true, 'Must enter a last name'],

  },
  image: {
    type: String,
    required: [true, 'Must enter a image'],

  },
},
);


auther.plugin(AutoIncrement,{inc_amount:1,inc_field: 'id_auther'});


const autherModel = mongoose.model('auther', auther);

module.exports = autherModel;





