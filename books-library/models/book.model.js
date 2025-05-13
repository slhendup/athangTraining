const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  // const BookSchema = new mongoose.Schema
  title: String,
  auther: String,
  publishedYear: Number,
});

const Book = mongoose.model("book", BookSchema);
module.exports = Book;
