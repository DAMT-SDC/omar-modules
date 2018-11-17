const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdcTest');

const ProductSchema = mongoose.Schema({
  id: Number,
  name: String,
  colors: [String],
  price: String,
  images: [String],
  review_count: Number,
  options: [String],
});

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;
