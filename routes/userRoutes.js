const express=require("express");

const { getAllUser,createUser,getsingleUser,updateUser,deleteUser } = require("../controllers/userCtrl");
// ROUTER Object 
const router=express.Router()

// new user 
router.post("/create-user",createUser)
// get all user
router.get("/get-users", getAllUser);

// get single user
router.get("/get-users/:id",getsingleUser)

// update user 
router.put("/update-user/:id",updateUser)


// delete user 
router.delete("/delete-user/:id",deleteUser)
// export router 
module.exports=router;