const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: Number,
  image: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Menu', menuSchema);


