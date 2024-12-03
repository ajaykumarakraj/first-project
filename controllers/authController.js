const userModel = require("../models/userModel");
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone no is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }
    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status.send({
        success: true,
        message: "already register please login ",
      });
    }
    // register user
    const hashedPassword = await hashedPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    resizeBy.status(500).send({
      success: false,
      message: "error in register",
      error,
    });
  }
};

module.exports = { registerController };
