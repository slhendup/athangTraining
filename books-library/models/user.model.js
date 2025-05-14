const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    // const BookSchema = new mongoose.Schema
    name: String,
    age: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
); // created date and time

const User = mongoose.model("user", UserSchema);
module.exports = User;
