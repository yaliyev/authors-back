import { Schema } from "mongoose";

var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    name: String,
    year: Number,
    coverImg: String,
    description: String,
    bookFile: String,
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
})

module.exports = BookSchema;