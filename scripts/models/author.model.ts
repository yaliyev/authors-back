var mongoose = require('mongoose');

var AuthorSchema = require('../schemas/author.schema');

var AuthorModel = mongoose.model('Author',AuthorSchema);

module.exports = AuthorModel;