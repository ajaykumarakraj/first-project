const mongoose = require("mongoose");
const dotenv = require("dotenv");
// config env
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connect to mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in moongo ${error}`);
  }
};
module.exports = connectDB;
