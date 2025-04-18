const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// // config env
// dotenv.config();
const connectDB =  async() => {
  try{
const conn =await mongoose.connect("mongodb://localhost:27017/createnewdatabase")
console.log(`connect to ${conn.connection.host}`)
  }catch(error){
console.log(`error message ${error.message}`)
  }
};
module.exports = connectDB;
  