var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
  name: String,
  birthYear: Number,
  genre: String,
  isDead: Boolean,
  Gender: String,
  authorImage: String
})

module.exports = AuthorSchema;