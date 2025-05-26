const mongoose = require("mongoose");
const { mongoURI } = require("../config");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Mongodb connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};
module.exports = connectMongoDB;
