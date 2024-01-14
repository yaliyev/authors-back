var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
  name: String,
  birthYear: Number,
  genre: String,
  isDead: Boolean,
  gender: String,
  authorImage: String,
  bio:String
})

module.exports = AuthorSchema;