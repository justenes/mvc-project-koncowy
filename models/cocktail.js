const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String,
  category: String,
  rating: Number,
  image: String, //ekleme yaptim
  author: { //bu user adi gosteriyor
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
}

});

module.exports = mongoose.model('Cocktail', cocktailSchema);
