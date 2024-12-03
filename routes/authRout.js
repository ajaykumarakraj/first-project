const express = require("express");
const { registerController } = require("../controllers/authController");
// const {registerController}=require("")
// router obj
const router = express.Router();

// register || method post
router.post("/register", registerController);

//export
module.exports = router;
