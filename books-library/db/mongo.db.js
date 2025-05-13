const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sonamlhendup:sl1234@cluster0.2p56bov.mongodb.net/book-library"
    );
    console.log("Mongodb connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};
module.exports = connectMongoDB;
