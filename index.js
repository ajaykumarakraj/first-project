const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//database config
connectDB();

// config env
dotenv.config();
// rest obj
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/authRout"));
// rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to mern code  ok </h1>");
});
//port
const PORT = process.env.PORT || 8080;
// run at server
app.listen(PORT, (req, res) => {
  console.log(`server run ${process.env.DEV_MODE} at ${PORT}`);
});
