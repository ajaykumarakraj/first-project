const express=require("express");
const { getUser } = require("../controllers/userCtrl");
const { addUser,createUser } = require("../controllers/userCtrl");
// ROUTER Object 
const router=express.Router()

// new user 
router.post("/create-user",createUser)
// get method 
router.get("/", getUser);

// post method 
router.post("/contact",addUser)
// export router 
module.exports=router;