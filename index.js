const express = require("express");
var bodyParser = require('body-parser');
const router = require("./routes/userRoutes");
const connectDB = require("./config/db");

//database config
connectDB()

// rest obj
const app = express();
// set views engine 
app.set('view engine', 'pug');
// Set the directory where your Pug views are located
app.set('views', './views');
// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))


// router file route 
app.use("/api/v1/auth",router)

// views routes
app.get("/",(req,res)=>{
res.render("first")
})
//port
const PORT = 8000;
// run at server
app.listen(PORT, (req, res) => {
  console.log(`server run at ${PORT}`);
});
