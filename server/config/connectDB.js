const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
    "mongodb+srv://chedi:chedi123@cluster0.grnv3c6.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
  }
};

module.exports = connectDB;
